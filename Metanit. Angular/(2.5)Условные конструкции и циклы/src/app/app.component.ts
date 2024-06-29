import { Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
 
class Item{
  constructor(public id: number, public name: string){}
}
 
@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule],
    template:`<div>
      <input [(ngModel)]="num" type="number" />
      @if(num==5){
        <p>Переменная num равна 5</p>
      } @else if(num==6){
        <p>Переменная num равна 6</p>
      } @else {
        <p>У переменной num неизвестное значение</p>
      }
    </div>
    <div>
      <input [(ngModel)]="age" min="1" type="number" />
      <h2>@if(age>0 && age < 110){
        Your age is {{age}}
      } @else {
        age is undefined
      }</h2>
    </div>
    <p>Результат: 
      @switch (op) {
        @case ("+") {
          {{ a + b }}
        }
        @case ("-") {
          {{ a - b }}
        }
        @case ("*") {
          {{ a * b }}
        }
        @default {
          Неизвестная операция
        }
      }
    </p>
    <ul>
    @for (item of items; track item.id) {
      <li>{{ item.name }}</li>
    }
</ul>`
})
export class AppComponent {
    num = 5;
    age: number|undefined = undefined;
    op = "*";
    a = 10;
    b = 5;
    items = [new Item(1, "Tom"), new Item(2, "Bob"), new Item(3,"Sam")];
}