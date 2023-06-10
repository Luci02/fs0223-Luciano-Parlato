import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TableComponent } from './components/table/table.component';
import { ModifyStudentComponent } from './pages/modify-student/modify-student.component';
import { ModifyStudentFormComponent } from './components/modify-student-form/modify-student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './pages/add-student/add-student.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
    ModifyStudentComponent,
    ModifyStudentFormComponent,
    AddStudentComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DashboardModule { }
