import { Component, OnInit } from '@angular/core';
import { Monstre } from 'src/app/_models/Personnage/Monstre/monstre';
import { Hero } from 'src/app/_models/Personnage/Hero/Hero';

@Component({
  selector: 'app-salle-combat',
  templateUrl: './salle-combat.component.html',
  styleUrls: ['./salle-combat.component.scss']
})
export class SalleCombatComponent implements OnInit {

  // attention relier a object et attaque
  
  monsters: Monstre[];
  listheros: Hero[];

  constructor() { }

  ngOnInit(): void {
  }

}
