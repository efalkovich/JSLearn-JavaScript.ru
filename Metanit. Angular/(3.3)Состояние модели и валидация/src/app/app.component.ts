import { Component} from "@angular/core";
import { FormsModule} from "@angular/forms";
 
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
        .alert{ color:red}
        div {margin: 5px 0;}    
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `,
    template: `<div> 
                    <div>
                        <label>Имя</label><br>
                        <input name="name" [(ngModel)]="user.name" #name="ngModel" required />
                    </div>
                    <div>
                        <label>Email</label><br>
                        <input name="email" type="email" [(ngModel)]="user.email" #email="ngModel" 
                            required email />
                    </div>
                    <div>
                        <label>Телефон</label><br>
                        <input  name="phone" [(ngModel)]="user.phone" #phone="ngModel" 
                            required pattern="[0-9]{11}" />
                    </div>
                    <button [disabled]="name.invalid || email.invalid || phone.invalid"
                        (click)="addUser()">Добавить</button>
              </div>`
})
export class AppComponent { 
   
    user: User = new User("", "", "");
    addUser(){
        console.log(this.user);
    }
}