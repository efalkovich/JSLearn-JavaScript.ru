import { Component} from "@angular/core";
import { HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
 
import { HttpService} from "./http.service";
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [HttpClientModule, FormsModule],
    template: `<div>
                <p>
                    <label>Введите первое число</label><br>
                    <input type="number" name="num1" [(ngModel)]="num1" />
                <p>
                <p>
                    <label>Введите второе число</label><br>
                    <input type="number" name="num2" [(ngModel)]="num2" />
                </p>
                    <button (click)="submit()">Отправить</button>
                </div>
                @if(done){ 
                    <div>Сумма: {{sum}}</div> 
                }
`,
    providers: [HttpService]
})
export class AppComponent { 
     
    num1: number = 0;
    num2: number = 0;
    sum: number | undefined;
    done: boolean = false;
    constructor(private httpService: HttpService){}
    submit(){
        this.httpService.getSum(this.num1, this.num2).subscribe({next:(data:any) => {
            this.sum=data.result; 
            this.done=true;
        }});
    }
}