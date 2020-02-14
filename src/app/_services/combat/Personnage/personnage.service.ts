import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/_models/Personnage/Hero/Hero';
import { Monstre } from 'src/app/_models/Personnage/Monstre/monstre';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private httpPlayer: HttpClient) { }

  retourPersonnage(hero: Hero): Observable<any>{
    return null;
  }

  retourhM(personnage: Hero, personnage2: Monstre){
    return null;
  }

  retourMh(personnage: Monstre, personnage2: Hero){
    return null;
  }

  

}
