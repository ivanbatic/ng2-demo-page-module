import {Component, Input} from "@angular/core";
@Component({
    selector: "demo-page",
    template: `
        <ng2-select [placeholder]="'Choose your framework'"
                [displayBy]="'name'"
                [selectedDisplayBy]="'label'"
                [identifyBy]="'name'"
                [options]="options">
        </ng2-select>
    `


})
export class DemoPageComponent {
    @Input()
    public options;
}