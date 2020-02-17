import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuriterComponent } from './_components/securiter/securiter.component';
import {CombatComponent} from './_components/combat/combat.component';
import { DonjonComponent } from './_components/donjon/donjon.component';
import { SalleRelaxeComponent } from './_components/salle/salle-relaxe/salle-relaxe.component';
import { SallePiegeComponent } from './_components/salle/salle-piege/salle-piege.component';
import { SalleCombatComponent } from './_components/salle/salle-combat/salle-combat.component';
import { SalleComponent } from './_components/salle/salle/salle.component';


const routes: Routes = [
  {path: '', redirectTo: '' , pathMatch: 'full'},
  {path: 'securiter', component: SecuriterComponent},
  {path: 'combat', component: CombatComponent},
  {path: 'combat/donjon', component: DonjonComponent},
  {path: 'salle', component: SalleComponent},
  {path: 'salleCombat', component: SalleCombatComponent},
  {path: 'salleRelax', component: SalleRelaxeComponent},
  {path: 'sallePiege', component: SallePiegeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
