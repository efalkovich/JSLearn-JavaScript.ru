import { Component} from "@angular/core";
import { FormsModule,  NgModel } from "@angular/forms";
 
class User{
    constructor(public name: string, 
                public age: number, 
                public company: string)
    { }
}
  
@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule], // для работы с формами импортируем FormsModule
    template: `<div> 
                    <p>
                        <label>Имя пользователя</label><br>
                        <input name="name" [(ngModel)]="user.name" 
                            #userName="ngModel" (ngModelChange)="onNameChange()" />
                    </p>
                    <p>
                        <label>Возраст</label><br>
                        <input type="number" name="age" [(ngModel)]="user.age" #userAge="ngModel"/>
                    </p>
                    <p>
                        <label>Место работы</label><br>
                        <select name="company" [(ngModel)]="user.company" #userCompany="ngModel">
                        @for(comp of companies; track $index){
                            <option [value]="comp">
                                {{comp}}
                            </option>
                        }
                        </select>
                    </p>
                    <button (click)="logUser(userName, userAge, userCompany)">Логгировать</button>
                </div>
                <div>
                    <p>{{userName.name}} : {{userName.model}}</p>
                    <p>{{userAge.name}} : {{userAge.model}}</p>
                    <p>{{userCompany.name}} : {{userCompany.model}}</p>
                </div>`
})
export class AppComponent { 
  
    user = new User("", 18, "")
      
    users: User[] = [];
    companies: string[] = ["Apple", "Microsoft", "Google", "Jetbrains"];
      
    logUser(name: NgModel, age: NgModel, company: NgModel){
        console.log(name);
        console.log(age);
        console.log(company);
    }

    onNameChange(){
    if(this.user.name=="admin")
        this.user.name = "Undefined";
    }
}