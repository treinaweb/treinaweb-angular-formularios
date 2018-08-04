import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('myForm') templateForm;

  informacoes = {
    nome: '',
    idade: '',
    email: '',
    confirmaEmail: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    
  }

  onSubmit(myForm: NgForm){
    console.log(myForm);
  }

  getAddress(cep){
    this.http.get(`http://viacep.com.br/ws/${cep}/json/`)
      .subscribe(
        endereco => {
          /*const values = this.templateForm.value;
          values.endereco.bairro = 'meu bairro';
          this.templateForm.setValue(values);*/
          this.templateForm.form.patchValue({endereco});
        }
      )
  }

}
