import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { AdminLayoutModule } from 'src/app/layouts/admin-layout/admin-layout.module';
import { SharedModule } from 'src/app/shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AdminPagesRoutingModule,
    SharedModule,
    AdminLayoutModule,
    ReactiveFormsModule
  ]
})
export class AdminPagesModule { }
