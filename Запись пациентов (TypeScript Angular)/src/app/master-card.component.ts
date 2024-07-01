import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'master-card',
    standalone: true,
    imports: [ CheckboxModule, FormsModule ],
    template: `
        <p-checkbox 
         binary="true" 
         [inputId]="id"
         [label]="value" 
         [(ngModel)]="checked"
         (onChange)="handleClick($event)"/>
    `,
    styleUrls: ['./assets/master-card.component.css'],
})
export class MasterCard {
    @Input() id: string;
    @Input() value: string;
    checked: boolean = false;
    @Output() clicked = new EventEmitter<any>();
    handleClick(event: any) {
        console.log(event);
        this.clicked.emit(event);
    }
}