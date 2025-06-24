import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { AuthModule } from '../auth/auth.module';
import { FirmRegistrtionComponent } from './firm-registrtion/firm-registrtion.component';


@NgModule({
  declarations: [UserComponent,UserManagementComponent, UserPreferencesComponent, UserProfileComponent, RoleManagementComponent, FirmRegistrtionComponent],
  imports: [
    AuthModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
