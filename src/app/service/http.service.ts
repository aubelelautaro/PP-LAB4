import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  GetListado(){
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  GetDetalle(pokemon){
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/'+pokemon);
  }

  GetAbility(url){
    return this.httpClient.get<any>(url);
  }

}