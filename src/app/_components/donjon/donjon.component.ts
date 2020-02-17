import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/_models/Personnage/Hero/Hero';

@Component({
  selector: 'app-donjon',
  templateUrl: './donjon.component.html',
  styleUrls: ['./donjon.component.scss']
})
export class DonjonComponent implements OnInit {

  heros: Hero[];
  liste:string[];
  valide : boolean;

  constructor() { }

  ngOnInit(): void {  
    
  }

  selectionner(item : Hero){
    // add de la liste 
  }

  retirer(item : Hero){
    // delete de la liste
  }

  // 
  selectionHero(hero : Hero): boolean{
    this.valide = false;
    this.heros.forEach(x => {if(x == hero){
      this.valide = true;
    }});
    return this.valide;
  }

  envoyer(){
    // renvoie equipe ou la garde et la renvoie dans le donjon
  }

}
