import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/_models/Personnage/Hero/Hero';

@Component({
  selector: 'app-donjon',
  templateUrl: './donjon.component.html',
  styleUrls: ['./donjon.component.scss']
})
export class DonjonComponent implements OnInit {

  heros: Hero[];

  constructor() { }

  ngOnInit(): void { }

}
