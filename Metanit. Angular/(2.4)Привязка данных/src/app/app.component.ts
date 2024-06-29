import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
      
@Component({
    selector: "my-app",
    standalone: true,
    imports:[FormsModule],
    template: `<p>Имя: {{name}}</p>
                <p>Возраст: {{age}}</p>
                <input type="text" [value]="name" />
                <input [attr.value]="text" />
                <p>Количество кликов {{count}}</p>
                <button (click)="increase($event)">Click</button>
                <p>Привет {{name}}</p>
                <input type="text" [(ngModel)]="name" /> <br><br>
                <input type="text" [(ngModel)]="name" />
                <div [class.redbox]="isRed"></div>
                <div [class.redbox]="!isRed"></div>
                <input type="checkbox" [(ngModel)]="isRed" />
                <div [style.backgroundColor]="isRed? 'red' : 'green'"></div>
                <div [style.background-color]="!isRed ? 'red' : 'green'"></div>
                <input type="checkbox" [(ngModel)]="isRed" />`,
    styles: [`
        div {width:50px; height:50px; border:1px solid #ccc}
         .redbox{background-color:red;}
    `]
})
export class AppComponent { 
    name = "Tom";
    age = 25;
    text = "Hello Metanit.com";
    count: number=0;
    increase($event : any) : void {
        this.count++;
        console.log($event);
    }
    isRed = false;
}