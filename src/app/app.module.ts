import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AppComponent } from './app.component';
import { HomeComponent } from './views//home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { NovoMembroComponent } from './views/novo-membro/novo-membro.component';
import { MembrosComponent } from './views/membros/membros.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { CasaComponent } from './views/casa/casa.component';
import { EscolaBibliaComponent } from './views/escola-biblia/escola-biblia.component';
import { FooterComponent } from './views/footer/footer.component';

registerLocaleData(localePt, 'pt');

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NovoMembroComponent,
    MembrosComponent,
    HomeComponent,
    HeaderComponent,
    EventosComponent,
    CalendarComponent,
    CasaComponent,
    EscolaBibliaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
