import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
import {ChildComponent} from './child.component';
       
@Component({
    selector: "my-app",
    standalone: true,
    imports: [ChildComponent, FormsModule],
    template: `<child-comp [userName]="name" [userAge]="age"></child-comp>
                <input type="number" [(ngModel)]="age" />`
})
export class AppComponent { 
    name = "Tom";
    age = 24;
}