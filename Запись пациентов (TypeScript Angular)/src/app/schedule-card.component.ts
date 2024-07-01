import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
      
@Component({
    selector: 'schedule-card',
    standalone: true,
    imports: [ NgIf ],
    template: 
    `
    <div class="dateHeader">{{ this.datetime }}</div>
    <div class="nameHeader">{{ this.author }}</div>

    <div id="time-list" >
        @for (item of timeArr; track $index) {
            <div class="time-card occupied" (click)="handleClick($event)" [id]="this.currentId[$index]" *ngIf="this.occTime.has(this.currentId[$index])">{{ this.occTime.get(this.currentId[$index]) }}</div>
            <div class="time-card" (click)="handleClick($event)" [id]="this.currentId[$index]" *ngIf="!this.occTime.has(this.currentId[$index])">{{ item }}</div>
        }
    </div>
    `,
    styleUrls: ['./assets/schedule-card.component.css'],
})
export class ScheduleCard implements OnInit {
    @Input() author: string;
    @Input() masterId: string = "";
    @Input() datetime: string;
    @Input() workStart: string = "";
    @Input() workEnd: string = "";
    @Input() occTime: Map<string, string> = new Map();

    @Output() clickedTime = new EventEmitter<any>();
    handleClick(event: any) {
        this.clickedTime.emit(event);
    }

    public currentId: string[] = [];

    public timeArr: string[] = [];

    generateArray() {
        this.timeArr = [];

        let startDate = this.workStart.split(':');
        let endDate = this.workEnd.split(':');
        let startDateTr = +startDate[0] * 60 + +startDate[1];
        let endDateTr = +endDate[0] * 60 + +endDate[1];

        for(let i = startDateTr; i <= endDateTr; i += 10) {
            let innerText : string = `${Math.floor(i / 60)}:${i % 60 == 0 ? '00' : i % 60}`;
            this.timeArr.push(innerText);
            this.currentId.push(this.masterId + '-' + this.datetime + '-' + innerText.split(":")[0] + innerText.split(":")[1]);
        }
    }

    ngOnInit() {
        this.generateArray();
    }
}