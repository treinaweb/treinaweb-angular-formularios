import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor(
    private http: HttpClient
  ) { }

  nameValidation(control: FormControl){
    const value = control.value || '',
      errorMessage = `O nome deve começar com "J", mas começa com ${value[0]}`;

    return value.toLowerCase()[0] === 'j' ? null : {'invalidName': errorMessage};    
  }

  userValidation(control: FormControl){
    return this.http.get(`https://api.github.com/users/${control.value}`)
      .pipe(
        map( response => {
          if(!response['message']){
            return {'invalidUser': 'username in use'};
          }
          return null;
        })
      )
  }
}
