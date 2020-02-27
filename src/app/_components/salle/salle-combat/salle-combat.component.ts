import { Component, OnInit } from '@angular/core';
import { Monstre } from 'src/app/_models/Personnage/Monstre/monstre';
import { Hero } from 'src/app/_models/Personnage/Hero/Hero';
import { Consommable } from 'src/app/_models/Comsommable';
import { CombatTourDTO } from 'src/app/_models/combat/CombatTourDTO';
import { PersonnageService } from 'src/app/_services/combat/Personnage/personnage.service';
import { CombatStarDTO } from 'src/app/_models/combat/CombatStarDTO';

@Component({
  selector: 'app-salle-combat',
  templateUrl: './salle-combat.component.html',
  styleUrls: ['./salle-combat.component.scss']
})
export class SalleCombatComponent implements OnInit {

  // attention relier a object et attaque
  

  combatStarDTO:CombatStarDTO;
  combatTourDTO:CombatTourDTO;
  choix:number;

  constructor(private personneService : PersonnageService) { 
    this.combatStarDTO = null;

    
  }

  ngOnInit(): void {
    
    this.personneService.retourHero(this.combatStarDTO).subscribe(y=>{
      this.combatStarDTO = y;
    })
    this.combatTourDTO=<CombatTourDTO>{};
    this.combatTourDTO.heroesattaquant =<Hero>{};
    this.combatTourDTO.monstreattaquant =<Monstre>{};
    this.combatTourDTO.heroesSetdefenseur = [];
    this.combatTourDTO.monstreSetdefenseur = [];
  }

  frapper(){
    this.combatStarDTO.monstre.forEach(monst => {
      if(this.combatStarDTO.ordre[0]==monst.id){
        this.combatTourDTO.cap=(Math.floor(Math.random() * 3) + 1)-1 ;
        this.combatTourDTO.choix=1;
        this.combatTourDTO.monstreattaquant = monst;
        this.combatTourDTO.heroesSetdefenseur[0] = this.combatStarDTO.joueurs[(Math.floor(Math.random() * 4) + 1)-1];
        this.personneService.retourhM(this.combatTourDTO).subscribe(r=>{
          this.combatTourDTO = r;
          this.refactory();
          this.next();
          this.rest();
        })
      }
    });
    this.combatStarDTO.joueurs.forEach(jour => {
      if(this.combatStarDTO.ordre[0]==jour.id){
        this.combatTourDTO.cap=(Math.floor(Math.random() * 3) + 1)-1 ;
        this.combatTourDTO.choix=1;
        this.combatTourDTO.heroesattaquant = jour;
        this.combatTourDTO.monstreSetdefenseur[0] = this.combatStarDTO.monstre[(Math.floor(Math.random() * 4) + 1)-1];
        this.personneService.retourhM(this.combatTourDTO).subscribe(r=>{
          this.combatTourDTO = r;
          this.refactory();
          this.next();
          this.rest();
        })
      }
    });
  }

  
  objet(){

  }


  fuir(){

  }


  next(){
    console.log(this.combatStarDTO.ordre);
    const save = this.combatStarDTO.ordre[0];
    for (let index = 0; index < this.combatStarDTO.ordre.length; index++) {
      if(index<this.combatStarDTO.ordre.length){
        this.combatStarDTO.ordre[index]=this.combatStarDTO.ordre[index+1]
      }else{
        this.combatStarDTO.ordre[index] = save;
      }
    }
    this.combatStarDTO.ordre[this.combatStarDTO.ordre.length-1] = save;
  }

  refactory(){
    
      for (let index = 0; index < this.combatStarDTO.joueurs.length; index++) {
        if(this.combatStarDTO.joueurs[index].id == this.combatTourDTO.heroesattaquant.id){
          this.combatStarDTO.joueurs[index] = this.combatTourDTO.heroesattaquant;
      }
      this.combatTourDTO.heroesSetdefenseur.forEach(herodef => {
        if(this.combatStarDTO.joueurs[index].id == herodef.id){
          this.combatStarDTO.joueurs[index] = herodef;
        }
      });
      }

      for (let index = 0; index <  this.combatStarDTO.monstre.length; index++) {
        if(this.combatStarDTO.monstre[index].id == this.combatTourDTO.monstreattaquant.id){
          this.combatStarDTO.monstre[index] = this.combatTourDTO.monstreattaquant;
      }
      this.combatTourDTO.monstreSetdefenseur.forEach(monstredef => {
        if(this.combatStarDTO.monstre[index].id == monstredef.id){
          this.combatStarDTO.monstre[index] = monstredef;
        }
      });
      }
  }
  
  rest(){
    this.combatTourDTO=<CombatTourDTO>{};
    this.combatTourDTO.heroesattaquant =<Hero>{};
    this.combatTourDTO.monstreattaquant =<Monstre>{};
    this.combatTourDTO.heroesSetdefenseur = [];
    this.combatTourDTO.monstreSetdefenseur = [];
  }
}
