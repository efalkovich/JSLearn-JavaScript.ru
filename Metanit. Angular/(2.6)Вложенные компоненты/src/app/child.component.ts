import { Component } from "@angular/core";
       
@Component({
    selector: 'child-comp',
    standalone: true,
    template: `<ng-content></ng-content>
            <p>Hello from {{name}}!</p>`,
    styles: [`h2 {color:navy;}`]
})
export class ChildComponent { 
    name= "ChildComponent";
}