import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  nameValidation(control: FormControl){
    const value = control.value || '',
      errorMessage = `O nome deve começar com "J", mas começa com ${value[0]}`;

    return value.toLowerCase()[0] === 'j' ? null : {'invalidName': errorMessage};    
  }
}
