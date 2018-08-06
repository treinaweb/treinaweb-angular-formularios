import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    /*this.myForm = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.myForm = this.formBuilder.group({
      nome: ['Treinaweb'],
      email: []
    })
  }

}
