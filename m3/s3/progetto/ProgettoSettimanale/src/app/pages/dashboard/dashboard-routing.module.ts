import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModifyStudentComponent } from './pages/modify-student/modify-student.component';
import { AddStudentComponent } from './pages/add-student/add-student.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'modify-student/:studentId',
    component: ModifyStudentComponent,
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
