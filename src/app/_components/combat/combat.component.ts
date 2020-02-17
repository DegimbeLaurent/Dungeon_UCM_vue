import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  image: string;

  constructor( ) { }

  ngOnInit( ): void {
    this.image = environment.imageDonjon;
  }

  lancerDonjon( ){
    // lien vers link: 'combat/donjon' grace au service; appel la factory de donjon ;
    // renvoie des données genre niv et element du donjon; ( string et int ) 
  }
}
