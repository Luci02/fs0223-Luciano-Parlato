import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';
import { StudentService } from '../../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modify-student-form',
  templateUrl: './modify-student-form.component.html',
  styleUrls: ['./modify-student-form.component.scss']
})
export class ModifyStudentFormComponent implements OnInit {

  studentForm!: FormGroup;

  studentData: Istudent = {
    id: 0,
    name: '',
    surname: '',
    address: {
      street: '',
      civic: 0,
      city: '',
      cap: ''
    },
    class: ''
  }

  constructor(
    private studentSvc: StudentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
  ){
    this.studentForm = this.formBuilder.group({
      id: 0,
      name: '',
      surname: '',
      address: this.formBuilder.group({
        street: '',
        civic: 0,
        city: '',
        cap: ''
      }),
      class: ''
    });
  }

  ngOnInit(): void {
    let studentId = this.activatedRoute.snapshot
    .paramMap.get('studentId');

    this.studentSvc.getSingleStudent(Number(studentId))
    .subscribe( student => {
      this.studentData = student;
      this.studentForm.patchValue(this.studentData);
    } )
  }

  sendChanges(){
    this.studentSvc.put(this.studentForm.value).subscribe({
      complete: () => {
        alert('operazione completata con successo');
        this.router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        new Error(err)
      }
    })
  }

}
