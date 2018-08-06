import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {

  myForm: FormGroup;

  states = [
    { nome: 'São Paulo', sigla: 'SP' },
    { nome: 'Rio de Janeiro', sigla: 'RJ' },
    { nome: 'Paraná', sigla: 'PR' },
    { nome: 'Minas Gerais', sigla: 'MG' }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    /*this.myForm = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/
    
    const fb = this.formBuilder;
    this.myForm = fb.group({
      informacoes: fb.group({
        nome: [null],
        idade: [null],
        email: [null],
        confirmaEmail: [null],
        sexo: ['M'],
        empregado: [null]
      }),
      endereco: fb.group({
        cep: [null],
        logradouro: [null],
        numero: [null],
        complemento: [null],
        bairro: [null],
        localidade: [null],
        uf: [null]
      })
    })

    this.myForm.get('informacoes.nome').valueChanges.subscribe(
      value => console.log('nome alterado: ', value)
    )
  }

  getAddress(){
    this.http.get(`http://viacep.com.br/ws/${this.myForm.get('endereco.cep').value}/json/`)
      .subscribe(
        endereco => {
          this.myForm.patchValue({endereco})
        }
      )
  }

  setState(){
    const myState = { nome: 'Rio de Janeiro', sigla: 'RJ' };
    this.myForm.get('endereco.uf').setValue(myState);
  }

  compareStates(obj1, obj2){
    if(obj1 && obj2){
      return obj1.sigla === obj2.sigla;
    }
    return false;
  }

}
