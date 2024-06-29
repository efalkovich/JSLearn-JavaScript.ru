import { Component} from "@angular/core";
import { FormsModule, NgForm} from "@angular/forms";
 
class User{
    constructor(public name: string,
        public email: string,
        public phone: string){}
}
  
@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule],
    styles: ` 
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `,
    template: `<form  #myForm="ngForm" novalidate (ngSubmit)="onSubmit(myForm)">
                    <p>
                        <label>Имя</label><br>
                        <input name="name" ngModel required />
                    </p>
                    <p>
                        <label>Email</label><br>
                        <input name="email" ngModel 
                            required email />
                    </p>
                    <p>
                        <label>Телефон</label><br>
                        <input name="phone" ngModel 
                            required pattern="[0-9]{10}" />
                    </p>
                    <input type="submit" [disabled]="myForm.invalid" value="Отправить" />
                </form>`
})
export class AppComponent { 
  
    name: string = "";
    email: string = "";
    phone: string = "";
      
    onSubmit(form: NgForm){
        console.log(form);
    }
}