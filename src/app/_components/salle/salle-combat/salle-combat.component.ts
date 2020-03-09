import { Component, OnInit } from '@angular/core';
import { Monstre } from 'src/app/_models/Personnage/Monstre/monstre';
import { Hero } from 'src/app/_models/Personnage/Hero/Hero';
import { Consommable } from 'src/app/_models/Comsommable';
import { CombatTourDTO } from 'src/app/_models/combat/CombatTourDTO';
import { PersonnageService } from 'src/app/_services/combat/Personnage/personnage.service';
import { CombatStarDTO } from 'src/app/_models/combat/CombatStarDTO';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-salle-combat',
  templateUrl: './salle-combat.component.html',
  styleUrls: ['./salle-combat.component.scss']
})
export class SalleCombatComponent implements OnInit {

  // attention relier a object et attaque
  

  boolchoixMonstre:Boolean;
  boolaction:Boolean;
  boolChoixAction:Boolean;
  boolCap:Boolean;
  choixCap:number;
  tourDe:number;
  nbrcible:number;

  combatStarDTO:CombatStarDTO;
  combatTourDTO:CombatTourDTO;
  choix:number;

  constructor(private personneService : PersonnageService) { 
    this.combatStarDTO = null;

    
  }

  ngOnInit(): void {
    
    this.personneService.retourHero(this.combatStarDTO).subscribe(y=>{
      this.combatStarDTO = y;
      this.combatStarDTO.cible=[];
    })
    this.combatTourDTO=<CombatTourDTO>{};
    this.combatTourDTO.heroesattaquant =<Hero>{};
    this.combatTourDTO.monstreattaquant =<Monstre>{};
    this.combatTourDTO.heroesSetdefenseur = [];
    this.combatTourDTO.monstreSetdefenseur = [];
    this.boolaction=false;
    this.boolchoixMonstre=false;
    this.boolCap=false;
  }

  choixaction(selec:number){
    this.choix=selec;
    switch(this.choix){
      case 1:
        this.boolChoixAction=false;
        this.boolCap=true;
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }

  choixcap(idcap:number,nbr:number){
    this.boolCap=false;
    this.nbrcible=nbr;
    this.combatStarDTO.cap= idcap;
    this.boolchoixMonstre=true;
  }

  choixcible(cible:number){
    this.combatStarDTO.cible.push(cible);
    console.log(this.nbrcible)
    if(this.combatStarDTO.cible.length == this.nbrcible){
      this.boolchoixMonstre=false;
      this.frapper();
    }
  }
  

  frapper(){
      if(this.combatStarDTO.ordre[0]==this.combatStarDTO.joueurs[this.tourDe].id){
        this.combatStarDTO.choix=this.choix;
        this.combatStarDTO.heroesattaquant = this.combatStarDTO.joueurs[this.tourDe];
        this.personneService.retourhM(this.combatStarDTO).subscribe(r=>{
          this.combatStarDTO = r;
          this.refactory();
          this.next();
          this.rest();
          this.boolCap=false;
          this.boolaction=false;
        })
      }
  }

  
  

  
  
  objet(){
  }


  fuir(){
  }

  action(){
    this.combatStarDTO.monstre.forEach(monstre => {
      if(this.combatStarDTO.ordre[0] == monstre.id){
        if(monstre.pointDeVie>0){
          this.frapBot(monstre);
        }else{
          this.next();
        }
      }
    });
    this.combatStarDTO.joueurs.forEach((joueur, index) => {
      if(this.combatStarDTO.ordre[0] == joueur.id){
        if(joueur.pointDeVie>0){
          this.boolaction=true;
          this.boolChoixAction=true;
          this.tourDe=index;
        }else{
          this.next();
        }
      }
    });
  }

  frapBot(monst:Monstre){
    this.combatStarDTO.cap=(Math.floor(Math.random() * 3) + 1)-1 ;
    this.combatStarDTO.choix=1;
    this.combatStarDTO.monstreattaquant = monst;
    this.combatStarDTO.cible.push((Math.floor(Math.random() * 3) + 1)-1) ;
    console.log(this.combatStarDTO.monstreattaquant)
    this.personneService.retourhM(this.combatStarDTO).subscribe(r=>{
      this.combatStarDTO = r;
      this.refactory();
      this.next();
      this.rest();
    })
  }

  passerTour(){
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
        if(this.combatStarDTO.heroesattaquant != null){
          if(this.combatStarDTO.joueurs[index].id == this.combatStarDTO.heroesattaquant.id){
            this.combatStarDTO.joueurs[index] = this.combatStarDTO.heroesattaquant;
          }
        }
      this.combatStarDTO.joueurs.forEach(herodef => {
        if(this.combatStarDTO.joueurs[index].id == herodef.id){
          this.combatStarDTO.joueurs[index] = herodef;
        }
      });
      }

      for (let index = 0; index <  this.combatStarDTO.monstre.length; index++) {
        if(this.combatStarDTO.monstreattaquant != null){
          if(this.combatStarDTO.monstre[index].id == this.combatStarDTO.monstreattaquant.id){
            this.combatStarDTO.monstre[index] = this.combatStarDTO.monstreattaquant;
          }
        }
      this.combatStarDTO.monstre.forEach(monstredef => {
        if(this.combatStarDTO.monstre[index].id == monstredef.id){
          this.combatStarDTO.monstre[index] = monstredef;
        }
      });
      }
  }
  rest(){
    this.combatStarDTO.heroesattaquant =<Hero>{};
    this.combatStarDTO.monstreattaquant =<Monstre>{};
    this.combatStarDTO.cible=[];
  }

  stat(etat:number,max:number){
    const strrip = 0+"%";
    if(etat>0){
      const str = (etat/max)*100 + "%";
      const styles = {'width' :  str };
      return styles;
    }
    const styles2 = {'width' :  strrip };
    console.log(strrip)
    return styles2;
  }

  live(pv:number){
    if(pv>0)return true
    if(pv<=0)return false
  }
}
