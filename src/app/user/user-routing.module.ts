import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserService } from './user.service';
import { RoleManagementComponent } from './role-management/role-management.component';
import { AuthModule } from '../auth/auth.module';
import { FirmRegistrtionComponent } from './firm-registrtion/firm-registrtion.component';


const routes: Routes = [
  {path:'', component: UserComponent,
  children: [
    {path: '', redirectTo: 'profile', pathMatch:'full'},
    {path: 'userManagement', component: UserManagementComponent},
    {path:'preference', component: UserPreferencesComponent},
    {path:'profile',component:UserProfileComponent},
    {path:'roleManagement', component: RoleManagementComponent},
    {path:'firmRegistration', component: FirmRegistrtionComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[UserService]
})
export class UserRoutingModule { }
