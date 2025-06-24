import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirmGroupRegistrationComponent } from './firm-group-registration/firm-group-registration.component';
import { FirmRegistrationComponent } from './firm-registration/firm-registration.component';
import { AdminRegstrationComponent } from './admin-regstration/admin-regstration.component';
import { LTORegistrationComponent } from './lto-registration/lto-registration.component';


@NgModule({
  declarations: [AdminComponent, FirmGroupRegistrationComponent, FirmRegistrationComponent, AdminRegstrationComponent, LTORegistrationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
