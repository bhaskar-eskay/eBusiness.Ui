import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistributionComponent } from './distribution.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DistributionRoutingModule } from './distribution-routing.module';
import { UserModule } from '../user/user.module';
import { MasterModule } from './Master/Master.Module';
import { InWardModule } from './in-ward/in-ward.module';
import { AdminModule } from './admin/admin.module';
import { ReuseService } from './reuse.service';
import { InProgressComponent } from './in-progress/in-progress.component';



@NgModule({
  declarations: [DistributionComponent, DashboardComponent, InProgressComponent],
  imports: [
    CommonModule,
    DistributionRoutingModule,
    SharedModule,
    UserModule,
    MasterModule,
    InWardModule,
    AdminModule
  ],
  providers:[ReuseService]
})
export class DistributionModule { }
