import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrivenFormClass } from 'src/app/Models/driven-form-class';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  datiForm: DrivenFormClass = new DrivenFormClass('','','','','','');

  constructor(){}

  onSubmit(form: NgForm): void {

    console.log(form);

    this.datiForm = form.value;

    console.log(this.datiForm);

  }

}
