import { Component} from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
 
import { HttpService} from "./http.service";
import { User } from "./user";
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [HttpClientModule, FormsModule],
    template: `<div>
                <p>
                    <label>Имя</label><br>
                    <input name="username" [(ngModel)]="user.name" />
                </p>
                <p>
                    <label>Возраст</label><br>
                    <input type="number" name="age" [(ngModel)]="user.age" />
                </p>
                    <button class="btn btn-default" (click)="submit(user)">Отправить</button>
                </div>
                @if(done){
                    <h3>Ответ сервера</h3>
                    <div>
                        Имя: {{receivedUser?.name}}<br>
                        Возраст: {{receivedUser?.age}}
                    </div>
                }`,
    providers: [HttpService]
})
export class AppComponent { 
    
    user: User=new User("", 0); // данные вводимого пользователя
        
    receivedUser: User | undefined; // полученный пользователь
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(user: User){
        this.httpService.postData(user)
                .subscribe({
                    next:(data: any) => {this.receivedUser=data; this.done=true;},
                    error: error => console.log(error)
                });
    }
}