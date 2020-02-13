import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecuriterComponent } from './_components/securiter/securiter.component';


const routes: Routes = [
  {path: '', redirectTo: '' , pathMatch: 'full'},
  {path: 'securiter',component:SecuriterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
