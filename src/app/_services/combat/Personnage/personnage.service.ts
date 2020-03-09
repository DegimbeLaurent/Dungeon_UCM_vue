import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CombatStarDTO } from 'src/app/_models/combat/CombatStarDTO';
import { CombatTourDTO } from 'src/app/_models/combat/CombatTourDTO';


@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor(private httpPlayer: HttpClient) { }

  retourHero(combatStarDTO : CombatStarDTO) : Observable<CombatStarDTO> {
    return this.httpPlayer.post<CombatStarDTO>(environment.combattre + '/lancer',{});
  }

  retourhM(anys : CombatStarDTO): Observable<CombatStarDTO>{
    return this.httpPlayer.post<CombatStarDTO>(environment.combattre + '/choix', anys );
  }

  retourPersonnage(): Observable<CombatStarDTO>{
    return this.httpPlayer.get<CombatStarDTO>(environment.combattre + '/getlancer');
  }
  

}
