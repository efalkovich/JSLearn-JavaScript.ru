import { Component, OnInit} from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
 
import { HttpService} from "./http.service";
import {User} from "./user";
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [HttpClientModule],
    template: `<div>{{this.httpService.errorMessage}}</div>
            <ul>
                @for(user of users; track $index){
                    <li>{{user?.name}} ({{user?.age}})</li>
            }
            </ul>`,
    providers: [HttpService]
})
export class AppComponent implements OnInit { 
    
    users: User[]=[];
      
    constructor(public httpService: HttpService){}
       
    ngOnInit(){
           
        this.httpService.getUsers().subscribe({next:(data: User[]) => this.users=data});
    }
}