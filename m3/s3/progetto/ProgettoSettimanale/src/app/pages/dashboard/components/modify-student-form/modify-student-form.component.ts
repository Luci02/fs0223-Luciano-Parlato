import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';
import { StudentService } from '../../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modify-student-form',
  templateUrl: './modify-student-form.component.html',
  styleUrls: ['./modify-student-form.component.scss']
})
export class ModifyStudentFormComponent implements OnInit, AfterViewInit {

  studentForm!: FormGroup;
  studentId!: string | null;
  @ViewChild('confirm') confirmBtn!: ElementRef;

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

    // Prendo il parametro dalla rotta se esiste, altrimenti mi ritorna null
    this.studentId = this.activatedRoute.snapshot
    .paramMap.get('studentId');

    console.log('studentID',this.studentId);

    if (this.studentId){
      // Se il parametro studentId (che sarebbe un numero) esiste entra nell'if
      console.log('sono dentro if, il parametro studentId esiste');

      this.studentSvc.getSingleStudent(Number(this.studentId))
    .subscribe( student => {
      this.studentData = student;
      this.studentForm.patchValue(this.studentData);
    } )

    }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.dir(this.confirmBtn.nativeElement)

    if (this.studentId){

      console.log('sono dentro if, il parametro studentId esiste', this.studentId);
      this.confirmBtn.nativeElement.onclick = () => {
        this.modify();
      }


    }else{
      console.log('sono dentro else, il parametro studentId non esiste', this.studentId);

      this.confirmBtn.nativeElement.onclick = () => {
        this.add();
      }

    }

  }

  modify(){
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

  add(){
    this.studentSvc.post(this.studentForm.value).subscribe({
      next: (value) => {
        console.log(value);
      },
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
