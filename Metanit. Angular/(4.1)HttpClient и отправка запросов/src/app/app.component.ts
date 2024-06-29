import { Component, OnInit} from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
 
import { HttpService} from "./http.service";
import {User} from "./user";
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [HttpClientModule],
    template: `<ul>
                @for(user of users; track $index){
                    <li>
                        <p>Имя пользователя: {{user?.name}}</p>
                        <p>Возраст пользователя: {{user?.age}}</p>
                    </li>
            }
            </ul>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
    
    users: User[]=[];
      
    constructor(private httpService: HttpService){}
       
    ngOnInit(){
           
        this.httpService.getData().subscribe({next: (data: any) => this.users=data["userList"]});
    }
}