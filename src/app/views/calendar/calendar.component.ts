import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    events: [
      { title: 'Encontro de Jovens', date: '2021-10-01' },
      { title: 'Reunião de Mulheres', date: '2021-10-02' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
