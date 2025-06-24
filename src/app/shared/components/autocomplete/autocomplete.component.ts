import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, finalize, map, startWith, switchMap, tap } from 'rxjs/operators';
import { OutWardHttpService } from '../../http-services/out-ward/out-ward-http.service';

export class AutoCompleteDefinition {
  isRequired?:boolean;
  isAddType?:boolean;
  label:string;
  keyString?:string;
  isStaticType?:boolean;
  validators?:ValidatorFn[];
  dataSourceFn?:(string?)=>Observable<any[]>;
  dependsOnDataProviderFn?:(any,string?)=>Observable<any[]>;
  minCount?:number;
  debounceTime?:number;
  enableLazyLoad?:boolean;
}


export interface OptionsTableDefinition {
  columns:OptionsTableColumn[];
  panelWidth:number;
}

export interface OptionsTableColumn {
  fxFlex:number;
  name:string;
  value:(any)=>string;
  isKeyColumn?:boolean;
  fxFlex1 : number;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, OnChanges, AfterViewInit,OnDestroy {

  @ViewChild(MatAutocompleteTrigger, {read: MatAutocompleteTrigger,static:true}) trigger: MatAutocompleteTrigger;
  @ViewChild('trigger',{static:true}) el:ElementRef;
  @Input() control:FormControl;
  @Input() definition:AutoCompleteDefinition;
  @Input() optionsTableDefinition:OptionsTableDefinition;
  @Input() autofocus:boolean=false;
  @Input() dataSourceFn:(string?)=>Observable<any[]>;
  @Input() nextElementId:string;
  @Input('id') elementId:string;
  @Input() dependent:AutocompleteComponent;
  @Input() autoSelect:boolean;
  
  items:any[];
  isLoading:boolean;
  currentValue:string;
  staticDataItems:any[];
  private isSelfUpdate:boolean;
  private isSubscribed:boolean=false;
  private subscription:Subscription=new Subscription();
  private dependsOnData:any;
  private dependsOnNextElementId:string;
  private isElementFocused:boolean;

  @HostListener('keydown.enter', ['$event'])
    onEnter(event: Event) {
      if(this.nextElementId &&  document.getElementById(this.nextElementId)) {
        setTimeout(()=>{
          event.preventDefault();
          let element=document.getElementById(this.nextElementId);
          element.focus();
          element.dispatchEvent(new Event("auto-complete-dependent-focused"));
        });
      }
    }
    @HostListener('keydown.tab', ['$event'])
    onTab(event: KeyboardEvent) {
      // this.control.patchValue(this.trigger.activeOption.value);
      // console.log(this.trigger.activeOption.value, 111);
      // console.log(this.items, 222);
      // console.log(this.definition.label, 333);
      // var filterData = []
      // switch (this.definition.keyString) {
      //   case 'compId':
      //     case 'name':
      //       case 'compName':
      //     filterData.push(this.items.filter(x =>x.compId ==  this.trigger.activeOption.value.compId));
      //     // this.service.sendTabData(filter);
      //     break;
      //   case 'schName':
      //     filterData.push(this.items.filter(x =>x.schId ==  this.trigger.activeOption.value.schId));
      //     break;
      //   case 'accName':
      //     case 'deliveryTo':
      //     filterData.push(this.items.filter(x =>x.accId ==  this.trigger.activeOption.value.accId));
      //     break;
      //   case 'districtName':
      //     filterData.push(this.items.filter(x =>x.districtId == this.trigger.activeOption.value.districtId));
      //     break;
      //   case 'cityName':
      //     filterData.push(this.items.filter(x =>x.cityId == this.trigger.activeOption.value.cityId));
      //     break;
      //   case 'Product Name':
      //     break;
      //   default:
      // }
      
      // filterData.push(this.definition.label);
      // console.log(filterData);
      // this.service.sendTabData(filterData);
      
    }
    
    @HostListener('auto-complete-dependent-focused', ['$event'])
    dependentFocused(event: Event) {
      this.isElementFocused=true;
      this.el.nativeElement.focus();
    }

  constructor(private service:OutWardHttpService) { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // ngAfterViewInit()
  // {
  //   this.subscription.add(this.trigger.panelClosingActions.subscribe(data =>{
  //     if (this.trigger.activeOption && !this.control.value && this.autoSelect)
  //     {
  //       this.control.patchValue(this.trigger.activeOption.value);
  //     }
  //   } ))
  // }

  ngAfterViewInit()
  {
    this.trigger.panelClosingActions.subscribe( x =>{
      if (this.trigger.activeOption)
      {
        console.log(this.trigger.activeOption.value)
        this.control.setValue(this.trigger.activeOption.value)
      }
    } )
  }

  ngOnChanges() {
    if(this.autofocus) {
      window.setTimeout(() => {
        this.el.nativeElement.focus();});
    }
    if(this.definition.enableLazyLoad && this.dataSourceFn) {
      this.staticDataItems=null;
      this.definition.dataSourceFn=this.dataSourceFn;
      if(!this.isSubscribed) {
        this.updateValidators();
       this.doSubscribeForValueChange();
      } else {
        this.control.patchValue(this.control.value);
      }
      
    } else if(this.definition && this.isSubscribed) {
      this.updateValidators();
      this.control.updateValueAndValidity();
    }
  }

  ngOnInit() {
   if(!this.definition.enableLazyLoad || this.definition.dataSourceFn || this.definition.dependsOnDataProviderFn) {
      this.doSubscribeForValueChange();
    }
  }

  private doSubscribeForValueChange() {
    if(!this.control.disabled && !this.isSubscribed) {
      this.isSubscribed=true;
      this.subscription.add(this.control.valueChanges.pipe(
        debounceTime(this.definition.isStaticType?0:this.definition.debounceTime?this.definition.debounceTime:300),
        startWith(this.control.value? this.control.value:''),
        switchMap(value => (this.isSelfUpdate || !this.isNotObjectType)?of(undefined):this.doGetData(value))
      ).subscribe(data => this.isSelfUpdate?this.isSelfUpdate=false:this.doFilterData(data)));
    }
  }

displayFn(item) {
    return this.getValue(item);
}

togglePanel(event): void {
  event.stopPropagation();
  if(this.trigger.panelOpen) {
    this.trigger.closePanel();
  } else {
    this.trigger.openPanel();
  }
}

autoCompleteValidator(control: AbstractControl): {[key: string]: boolean } | null {
  if(!this.items) {
    return { 'invalidValue': true };
  } 
  if (this.isNotObjectType()) {
      let filterIncludesItems=this.items.filter(item=>
        this.definition.keyString ? 
        (''+item[this.definition.keyString]).toLowerCase().startsWith(control.value.toLowerCase()):
        (''+item).toLowerCase().startsWith(control.value.toLowerCase())
        );
      let filterExtactItems=this.items.filter(item=>
          this.definition.keyString ? 
          (''+item[this.definition.keyString]).toLowerCase()===control.value.toLowerCase():
          (''+item).toLowerCase()===control.value.toLowerCase());
        if(filterIncludesItems.length<=1 && filterExtactItems.length===0) {
          return { 'invalidValue': true };
        } else if(filterIncludesItems.length>1) {
          return { 'duplicateItems': true };
        }
  }
  return null;
}

private isNotObjectType() {
  return this.control.value && (typeof this.control.value === 'string' || typeof this.control.value === 'number');
}

private updateValidators() {
  let validatorsArray=[];
  if(this.definition.validators) {
    validatorsArray=[...this.definition.validators];
  }
  if(!this.definition.isAddType) {
    validatorsArray.push(this.autoCompleteValidator.bind(this));
  }
  if(this.definition.isRequired) {
    validatorsArray.push(Validators.required);
  }
  this.control.setValidators(validatorsArray);
}

private getValue(item) {
  return item ? (typeof item ==='string' || typeof item ==='number') ?
        item:
        item[this.definition.keyString]:
        '';
}

private doGetData(value) {
  let updatedValue=this.getValue(value);
  if(this.definition.minCount && updatedValue.length<this.definition.minCount) {
    return of([]);
  }
  if(this.currentValue && this.currentValue === updatedValue) {
    return of(this.items);
  }
  this.currentValue=updatedValue;
  if(this.definition.isStaticType && this.staticDataItems) {
    return of(this.staticDataItems);
  }
  this.items = [];
  this.isLoading = true;
  if(this.definition.dependsOnDataProviderFn) {
    return (this.dependsOnData?
      this.definition.dependsOnDataProviderFn(this.dependsOnData,this.currentValue):
      of(undefined))
    .pipe(tap(data=>{
      this.staticDataItems=data?Array.isArray(data)?[...data]:[data]:[];
    }),finalize(() => this.isLoading = false));
  }
  return this.definition.dataSourceFn(this.definition.isStaticType?null:this.currentValue)
  .pipe(tap(data=>{
    this.staticDataItems=data?Array.isArray(data)?[...data]:[data]:[];
  }),finalize(() => this.isLoading = false));
  
}

private doFilterData(data) {
  this.items=data?Array.isArray(data)?data:[data]:[];
      if(this.definition.isStaticType && (this.currentValue === '' || this.currentValue)) {
        this.items=[...this.items.filter(item=>
            {
              if(item) {
                if(typeof item === 'number' && (''+item).startsWith(''+this.currentValue)) {
                  return true;
                } else if (typeof item ==='string' && item.toLowerCase().startsWith(this.currentValue.toLowerCase())) {
                   return true;
                } else if(item[this.definition.keyString] && item[this.definition.keyString].toLowerCase().startsWith(this.currentValue.toLowerCase())) {
                  return true;
                }         
              }
              return false;
            }
        )];
      }
  if(this.isNotObjectType() && this.items && this.items.length === 1) {
    if(typeof this.items[0] !=='string' && this.items[0][this.definition.keyString].toLowerCase()===this.control.value.toLowerCase()) {
      this.isSelfUpdate=true;
      this.control.patchValue(this.items[0]);
    }   
  }
  if(this.currentValue === '' && this.definition.isRequired && this.items && this.items.length === 1 && !this.definition.isAddType) {
      this.isSelfUpdate=true;
      this.trigger.closePanel();
      this.control.patchValue(this.items[0]);
      //this.control.disable();
  }
  if(this.dependent) {
    (this.control.value && this.control.valid) ? 
    this.dependent.doEnableDependent(this.control.value,this.nextElementId) :
    this.dependent.doDisableDependent();
  }
  if(this.isElementFocused && this.dependsOnNextElementId && this.elementId && this.dependsOnNextElementId===this.elementId) {
    this.isElementFocused=false;
    window.setTimeout(() => this.el.nativeElement.focus());
  }
}


doEnableDependent(dependsOnData:any,nextElementId?:string) {
  this.dependsOnNextElementId=nextElementId;
  this.dependsOnData=dependsOnData;
  this.control.enable();
  this.control.patchValue(this.control.value);
}

doDisableDependent() {
  this.dependsOnData=null;
  this.control.reset();
  this.control.disable();
}

}
