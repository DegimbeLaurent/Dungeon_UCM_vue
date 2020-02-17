import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private httpPlayer: HttpClient) { }

  retourHero(anys : any[]) : Observable<any[]> {
    console.log(environment.combattre + '/lancer', anys);
    return this.httpPlayer.post<any[]>(environment.combattre + '/lancer', anys);
  }

  retourhM(anys : any[]): Observable<any[]>{
    console.log(environment.combattre + '/choix', anys);
    return this.httpPlayer.post<any>(environment.combattre + '/choix', anys );
  }

  retourPersonnage(): Observable<any[]>{
    console.log(environment.combattre + '/getlancer');
    return this.httpPlayer.get<any>(environment.combattre + '/getlancer');
  }
  

}
