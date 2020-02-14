import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  machin: NbMenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.machin = [
      { title: 'login', link: '/securiter', icon: 'arrow-circle-right' },
      { title: 'Combat', link: '/combat', icon: 'moon'},
      {title: 'Home Donjon', link: '/donjon', icon: 'home'}
      ];
  }

}
