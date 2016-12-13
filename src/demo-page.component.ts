import {Component} from "@angular/core";
@Component({
    selector: "demo-page",
    template: `
        <ng-content></ng-content>
        <demo-button [content]="'Click me'"></demo-button>
    `


})
export class DemoPageComponent {

}