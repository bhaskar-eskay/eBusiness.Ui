import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth-guard';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { RouteConst } from './shared/app-constants';
// import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';


const routes: Routes = [
  { path: '', redirectTo: RouteConst.LOGIN, pathMatch: 'full' },
  { path: RouteConst.LOGIN, component: AuthComponent },
  // { path: 'ForgotPassword', component: ForgotPasswordComponent },
  {
    path: '',  children: [
      { path: RouteConst.CHANGE_PASSWORD, component: NewPasswordComponent },
      { path: RouteConst.ADMINISTRATION, loadChildren: () => import('./distribution/admin/admin.module').then(m => m.AdminModule) },
      { path: RouteConst.PHARMA,canActivateChild: [AuthGuard], loadChildren: () => import('./distribution/distribution.module').then(m => m.DistributionModule) }
    ]
  },
  { path: '**', redirectTo: RouteConst.LOGIN },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
