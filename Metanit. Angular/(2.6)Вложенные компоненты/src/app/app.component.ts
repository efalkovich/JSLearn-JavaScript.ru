import { Component } from "@angular/core";
import {ChildComponent} from './child.component';
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [ChildComponent],
    template: `<child-comp><h2>Hello from {{name}}</h2></child-comp>`,
    styles: ["h2 {color:red;}"]
})
export class AppComponent { 
    name = "AppComponent";
}