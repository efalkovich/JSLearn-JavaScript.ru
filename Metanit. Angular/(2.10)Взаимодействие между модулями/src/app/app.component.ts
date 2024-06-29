import { Component} from "@angular/core";
    
@Component({
    selector: "my-app",
    standalone: true,
    template: `<div>
                    <h1>AppModule</h1>
                    <data-comp></data-comp>
               </div>`
})
export class AppComponent {}