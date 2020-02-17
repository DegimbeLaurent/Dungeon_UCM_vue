import { Component, OnInit } from '@angular/core';
import { Monstre } from 'src/app/_models/Personnage/Monstre/monstre';
import { Hero } from 'src/app/_models/Personnage/Hero/Hero';
import { Consommable } from 'src/app/_models/Comsommable';
import { PersonnageService } from 'src/app/_services/combat/Personnage/personnage.service';

@Component({
  selector: 'app-salle-combat',
  templateUrl: './salle-combat.component.html',
  styleUrls: ['./salle-combat.component.scss']
})
export class SalleCombatComponent implements OnInit {

  // attention relier a object et attaque
  
  anys : any[];
  monsters: Monstre[];
  listheros: Hero[];
  nature : string;
  lvlDonjon : number;
  ordre : number[];
  consommable : Consommable;

  constructor(private personneService : PersonnageService) { }

  ngOnInit(): void {
    this.personneService.retourPersonnage().subscribe(x => {
      this.anys = x;
    })
    
  }

}
