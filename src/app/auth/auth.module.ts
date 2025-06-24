import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { NewPasswordComponent } from './new-password/new-password.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';




@NgModule({
  declarations: [AuthComponent, NewPasswordComponent],
  imports: [SharedModule]
})
export class AuthModule { }
