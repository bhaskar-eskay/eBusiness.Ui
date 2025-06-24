import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GstReportsRoutingModule } from './gst-reports-routing.module';
import { Gstr1ReportComponent } from './gstr1-report/gstr1-report.component';
import { Gstr3bReportComponent } from './gstr3b-report/gstr3b-report.component';
import { GstReportsComponent } from './gst-reports/gst-reports.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [Gstr1ReportComponent, Gstr3bReportComponent, GstReportsComponent],
  imports: [
    CommonModule,
    GstReportsRoutingModule,
    SharedModule
  ]
})
export class GstReportsModule { }
