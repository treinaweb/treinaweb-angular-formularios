import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  
  informacoes = {
    nome: '',
    idade: '',
    email: '',
    confirmaEmail: ''
  }

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(myForm: NgForm){
    console.log(myForm);
  }

}
