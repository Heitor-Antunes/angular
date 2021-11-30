import { EventosComponent } from './views/eventos/eventos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { Routes } from '@angular/router';
import { MembrosComponent } from './views/membros/membros.component';
import { NovoMembroComponent } from './views/novo-membro/novo-membro.component';
import { HomeComponent } from './views/home/home.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CasaComponent } from './views/casa/casa.component';
import { EscolaBibliaComponent } from './views/escola-biblia/escola-biblia.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'eventos', component: EventosComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'membros', component: MembrosComponent},
  {path: 'novo-membro', component: NovoMembroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'casa', component: CasaComponent},
  {path: 'escola-biblia', component: EscolaBibliaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule{}
