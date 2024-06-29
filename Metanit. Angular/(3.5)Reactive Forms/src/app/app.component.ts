import { Component} from "@angular/core";
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray} from "@angular/forms";
 
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule],
    styles: ` 
        div {margin: 5px 0;}
        .alert {color:red;}
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `,
    template: `<form [formGroup]="myForm" novalidate (ngSubmit)="submit()">
                    <div>
                        <label>Имя</label><br>
                        <input name="name"  formControlName="userName" />
 
                        @if(myForm.controls["userName"].invalid && myForm.controls["userName"].touched){
                            <div class="alert">Не указано имя</div>
                        }
                    </div>
                    <div>
                        <label>Email</label><br>
                        <input name="email" formControlName="userEmail" />
 
                        @if(myForm.controls["userEmail"].invalid && myForm.controls["userEmail"].touched){
                            <div class="alert">Некорректный email</div>
                        }
                    </div>
                    <div formArrayName="phones">
                    @for(phone of getFormsControls()["controls"]; track $index){
                        <div>
                            <label>Телефон</label><br>
                            <input formControlName="{{$index}}" />
                        </div>
                    }
                    </div>
                    <button (click)="addPhone()">Добавить телефон</button>
                    <button [disabled]="myForm.invalid">Отправить</button>
                </form>`
})
export class AppComponent { 
   
    myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({
              
            "userName": new FormControl("Tom", [Validators.required]),
            "userEmail": new FormControl("", [
                                Validators.required, 
                                Validators.email 
                            ]),
            "phones": new FormArray([
                new FormControl("+7", Validators.required)
            ])
        });
    }
    getFormsControls() : FormArray{
        return this.myForm.controls["phones"] as FormArray;
    }
    addPhone(){
        (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+7", Validators.required));
    }
    submit(){
        console.log(this.myForm);
    }
}