import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRegstrationComponent } from './admin-regstration/admin-regstration.component';
import { AdminComponent } from './admin.component';
import { FirmGroupRegistrationComponent } from './firm-group-registration/firm-group-registration.component';
import { FirmRegistrationComponent } from './firm-registration/firm-registration.component';
import { LTORegistrationComponent } from './lto-registration/lto-registration.component';


const routes: Routes = [
  {path:'', component:AdminComponent , 
  children:[
    {path:'firmgroupregistration', component:FirmGroupRegistrationComponent},
    {path:'firmregistration', component:FirmRegistrationComponent},
    {path:'adminregistration', component: AdminRegstrationComponent},
    {path:'ltoregistration', component: LTORegistrationComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
