import { Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ChildComponent} from "./child.component";
      
@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, ChildComponent],
    template: `<child-comp [name]="name"></child-comp>
                <input type="text" [(ngModel)]="name" />`
})
export class AppComponent{ 
     name = "Tom";
}