import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private httpPlayer: HttpClient) { }

  retourPersonnage(hero: any): Observable<any>{
    return this.httpPlayer.post<any>('');
  }

  retourPersonnages(personnage: any, personnage2: any){
    return this.httpPlayer.post();
  }

}
