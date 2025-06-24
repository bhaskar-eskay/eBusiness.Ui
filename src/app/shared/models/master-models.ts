export interface Schedules {
    schId: number,
    schName: string,
    mainSchId: any,
    schMode: string,
    schGroup: string,
    schCredit: number,
    schDebit: number,
    hasAddressInfo: number,
    hasRegInfo: number,
    hasOtherInfo: number,
    isEditable: number,
    isDeletable: boolean,
    mainSchName:any
}


export interface Areas {
    areaId?:number;
    areaName:string;
    areaCustCount:string;
    areaOpening: string;
    firmUserId:number;
}

export interface CompanyMaster {
    compId?:number;
    compName:string;
    compShName:string;
    address1:string;
    address2:string;
    cityId:number;
    compGroupId:number;
    isActive:number;
    inActiveDate:string;
    stateId:number;
    stateName:string;
    districtId:number;
    districtName:string;
    cityName:string;
    compGroupName:string;
}

export interface CompanyGroup {
    compGroupId?:number;
    compGroupName:string;
}

export interface Manufacturer {
    mfgId?:number;
    mfgName:string;
    cityId:number;
    cityName:string;
    districtId:number;
    districtName:string;
    stateId:number;
    stateName:string;


}

export interface ProdMasterType {
    prodMasterTypeId?:number;
    prodMasterTypeName:string;
    prodMasterType:string;
}

export interface ProductPack{
    prodPackId?:number;
    prodPackName:string;
    prodLoosePack:string;
    prodUOMId?:string|number;
}

export interface custProducts {
    compName: any;
    prodId?:number;
    prodName:string;
    prodFullName:string;
    prodTypeId: string| {id: number};
    prodShName:string;
    prodPackId:string | {id: number};   
    compId:string | {id: number} | Company;  
    companyGroups:string| CompanyGroups;  
    boxPack:string;  
    casePack:string;  
    prodGroupId:string| {id: number};  
    prodCatId:string| {id: number};  
    prodCombId:string| {id: number};  
    prodLocationId:string| {id: number};  
    taxSlabId:string;  
    hsnId:number;  
    hsncode: number;
    netRate:string;  
    prodCasePack: number;
    prodBoxPack: number;
    allowNetRate:number;  
    allowDiscount:number;  
    allowExpiry:number;  
    allowMfg:number;  
    allowInventory:number; 
    allowLoose:number; 
    pRate: number,
    sRate: number;
    rRate: number;
    stkRate: number;
    mrp: number;
    discRecd: number;
    prodBarcode: string;
    isActive: number;
    taxSlabs?: {
        id: number
    },
   
}

export interface TaxType {
    id?:number;
    name:string;
    isActive:boolean;
    activeDate:Date;
}


export interface TaxSlab {
    id?:number;
    slab:string;
    isActive:boolean;
    activeDate:Date;
    terminationDate?:Date;
    type:TaxType;
    hasStake:boolean;
}

export interface TaxCategory {
    id?:number;
    name:String;
}

export interface TaxStake {
    id?:number;
    slab:TaxSlab;
    category:TaxCategory;
    name:String;
    percent:number;
    contribution:number;
    isActive:boolean;
    activeDate:Date;
    terminationDate:Date;
}

// Custom Products
export interface ProdPack {
    id: number;
    name: string;
    type: string;
}

export interface ProdCategory {
    id: number;
    name: string;
    type: string;
}

export interface ProdCombination {
    id: number;
    name: string;
    type: string;
}

export interface ProdType {
    id: number;
    name: string;
    type: string;
}

export interface ProdLocation {
    id: number;
    name: string;
    type: string;
}

export interface CompanyGroups {
    id: number;
    name: string;
}

export interface Company {
    address1?: any;
    address2?: any;
    companyGroups: CompanyGroups;
    id: number;
    name: string;
    city?: any;
}

export interface CustomProducts {
    id: number;
    prodName: string;
    prodFullName: string;
    prodPack: ProdPack;
    prodCategory: ProdCategory;
    prodCombination: ProdCombination;
    prodType: ProdType;
    prodLocation: ProdLocation;
    pRate: number;
    sRate: number;
    mrp: number;
    rRate: number;
    stkRate: number;
    hsnId: number;
    taxSlabId: number;
    discRecd: number;
    prodShName: string;
    prodBarcode?: any;
    allowInventory?: any;
    cumPurQty: number;
    cumPurVal: number;
    cumPur2Qty: number;
    cumPur2Val: number;
    cumSaleQty: number;
    cumSaleVal: number;
    cumSale2Qty: number;
    cumSale2Val: number;
    cumSretQty: number;
    cumSretVal: number;
    cumSret2Qty: number;
    cumSret2Val: number;
    cumPretQty: number;
    cumPretVal: number;
    cumPret2Qty: number;
    cumPret2Val: number;
    company: Company;
}


export interface Schdule {
    id: number;
    schName: string;
    schMode: string;
    schGroup: string;
    mainSch: Schdule;
    schCredit: number;
    schDebit: number;
    hasRegInfo: number;
    hasAddressInfo: number;
    parentSchId: number;
    deleteFlag: boolean;
}

export interface Firmcategory {
    id: number;
    firmCategoryName: string;
    isFirmTypeRequired: number;
}

export interface FirmType {
    id: number;
    firmcategory: Firmcategory;
    firmType: string;
}

export interface HsnMaster {
    hsnId: number;
    hsncode: number;
    hsnDescription: string;
    hsnShDescription: string;
}

export interface Type {
    isActive: boolean;
    activeDate?: any;
    id: number;
    name: string;
}

export interface TaxSlabs {
    activeDate: Date;
    isActive: boolean;
    hasStake: boolean;
    id: number;
    slab: string;
    terminationDate?: any;
    type: Type;
}

export interface City {
    id: number;
    description: string;
    name: string;
    district?: District;
}

export interface AccountMaster {
    id: number;
    shName: string;
    name: string;
    addressLine: string;
    addressLine2: string;
    accountLtos: AccountLTOs[];
    schedule: Schdule;
    phone: string;
    mobile: number;
    contactPerson: string;
    contactPersonMobile: number;
    city: City;
    smsMobile:string;
    allowWhatsApp:boolean;
    allowSms:boolean;
    firmType: FirmType;
    opBal: number;
    opBalType: number;
    credit: number;
    debit: number;
    creditLimit: number;
    dueDays: number;
    interest: number;
    tcsPercent: number;
    hsnMaster: HsnMaster;
    sacCode: number;
    taxSlabs: TaxSlabs;
    isActive?: boolean;
    inActiveDate?: Date;
    whatsAppMobile?:number;
    bank:Banks;
    bankAccNo:string;
    bankIFSCCode:string;
    secondBank:Banks;
    secondBankAccNo:string;
    secondBankIFSCCode:string;
}

export interface AccountLTOs {
    id?:number;
    ltoPrefixOrder:number;
    ltoNo:string;
    ltoValidDate:Date;
    ltoPrefix:LTOPrefix;
}



export interface Banks {
    id?:number;
    code:string;
    name:string;
}