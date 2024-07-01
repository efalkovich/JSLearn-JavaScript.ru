import { Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { DateBlock } from "./date-block.component";
import { MasterCard } from "./master-card.component";
import { ScheduleCard } from "./schedule-card.component";
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { NgFor } from "@angular/common";

import { Master } from "./master";
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [HttpClientModule, DateBlock, MasterCard, ScheduleCard, DialogModule, ButtonModule, FormsModule, NgFor ],
    templateUrl: `./assets/app.component.html`,
    styleUrls: ['./assets/app.component.css']
})
export class AppComponent implements OnInit { 
    public masters: Master[] = [];
    public selectedMasters: string[] = [];
    public occupiedTimes: Map<string, string>;

    public currentId: string = "";
    public currentDate: string = "";
    public visible: boolean = false;
    public modal: boolean = false;

    constructor(private http: HttpClient){
        document.body.className = 'forBody';
        let str: string[] = (new Date()).toString().split(" ");
        this.currentDate = `${str[1]} ${str[2]} ${str[3]}`;
        this.occupiedTimes = new Map();

        for(let id in localStorage) {
            if (!localStorage.hasOwnProperty(id)) {
                continue;
            }
            this.occupiedTimes.set(id, localStorage.getItem(id));
        }
    }

    ngOnInit() {
        this.http.get('http://localhost:3000/masters', {}).subscribe( {next: (data) => {
            this.masters = data["masters"];
        } });
    }

    handleCardClick(event: any) {
        let temp = event.originalEvent.target.closest("p-checkbox").lastElementChild;
        let id: string = temp.control.id;
        if(event.checked) {
            this.selectedMasters.push(id);
        } else {
            let forRemove = this.selectedMasters.find(item => item == id);
            this.selectedMasters.splice(this.selectedMasters.indexOf(forRemove), 1);
        }
    }

    handleDateChange(event: any) {
        let str: string[] = event.toString().split(" ");
        this.currentDate = `${str[1]} ${str[2]} ${str[3]}`;
        let copy = this.selectedMasters.slice();

        for(let i = 0; i < this.selectedMasters.length;) {
            this.selectedMasters.pop();
        }

        for(let i = 0; i < copy.length; i++) {
            this.selectedMasters.push(copy[i]);
        }
        console.log(this.selectedMasters);

    }  

    handleTimeClick($event: any) {
        if((<HTMLElement>event.target).classList.contains("occupied")) {
            return;
        }

        let id = (event.target as HTMLDivElement).id;
        let time = id.split('-')[2];
        this.currentId = id;
        this.visible = true;
        this.modal = true;
        setTimeout(() => {
            ;
            (<HTMLInputElement>document.querySelector("input[id='data']")).value = this.currentDate;
            (<HTMLInputElement>document.querySelector("input[id='time']")).value = `${time.slice(0, -2)}:${time.slice(-2)}`;
            (<HTMLInputElement>document.querySelector("input[id='master']")).value = this.masters[id.split("-")[0].slice(6)].fullName;
            (<HTMLInputElement>document.querySelector("input[id='customer']")).value = "";
        });
    }
    saveLogic() {
        let input = <HTMLInputElement>document.querySelector("input[id='customer']")
        if(input.value != "") {
            this.occupiedTimes.set(this.currentId, input.value);
            localStorage[this.currentId] = input.value;
            this.visible = false;
            this.modal = false;
        }
    }
}