import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbInputModule, NbIconModule,
  NbMenuModule, NbSidebarModule, NbButtonModule, NbDatepickerModule, NbSelectModule,
  NbDialogModule, NbToastrModule, NbActionsModule, NbListModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './_components/nav/nav/nav.component';
import { SecuriterComponent } from './_components/securiter/securiter.component';
import { CombatComponent } from './_components/combat/combat.component';
import { DonjonComponent } from './_components/donjon/donjon.component';
import { SalleComponent } from './_components/salle/salle/salle.component';
import { SalleCombatComponent } from './_components/salle/salle-combat/salle-combat.component';
import { SalleRelaxeComponent } from './_components/salle/salle-relaxe/salle-relaxe.component';
import { SallePiegeComponent } from './_components/salle/salle-piege/salle-piege.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SecuriterComponent,
    CombatComponent,
    DonjonComponent,
    SalleComponent,
    SalleCombatComponent,
    SalleRelaxeComponent,
    SallePiegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbDatepickerModule.forRoot(),
    NbSelectModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NbActionsModule,
    NbListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
