import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuriterComponent } from './_components/securiter/securiter.component';
import {CombatComponent} from './_components/combat/combat.component';
import { DonjonComponent } from './_components/donjon/donjon.component';


const routes: Routes = [
  {path: '', redirectTo: '' , pathMatch: 'full'},
  {path: 'securiter', component: SecuriterComponent},
  {path: 'combat', component: CombatComponent},
  {path: 'donjon', component: DonjonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
