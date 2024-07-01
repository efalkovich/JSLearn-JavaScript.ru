import { Component, ViewChild, ElementRef, Renderer2, Output, EventEmitter } from "@angular/core";
import { Calendar, CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
      
@Component({
    selector: 'date-block',
    standalone: true,
    imports: [ FormsModule, CalendarModule ],
    template: `
        <h3 (click)="handleHeaderClick()">ДАТА ЗАПИСИ</h3>
        <p-calendar #calendar [(ngModel)]="date" showIcon="true" showOnFocus="false" appendTo="body" (onSelect)="handleClick($event)"/>
    `,
    styleUrls: ['./assets/date-block.component.css'],
})
export class DateBlock {
    @ViewChild('calendar') calendar: Calendar;
    date: Date = new Date();

    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngAfterViewInit() {
        this.renderer.listen('document', 'click', (event) => {
          if (!this.el.nativeElement.contains(event.target) && !event.target.classList.contains("p-element") 
            && !(event.target.nodeName == "BUTTON") && !(event.target.nodeName == "INPUT")) {
            this.calendar.hideOverlay();
            this.calendar.inputfieldViewChild.nativeElement.blur();
          }
        });
    }

    handleHeaderClick() {
        this.calendar.hideOverlay();
        this.calendar.inputfieldViewChild.nativeElement.blur();
    }

    @Output() changed = new EventEmitter<any>();
    handleClick(event: any) {
        console.log('Child: changed');
        this.changed.emit(event);
    }
}