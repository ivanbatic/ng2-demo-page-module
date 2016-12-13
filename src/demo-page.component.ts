import {Component} from "@angular/core";
@Component({
    selector: "demo-page",
    template: `
        Page Content: <ng-content></ng-content>
        And a button: <demo-button [content]="'Click me'"></demo-button>
    `


})
export class DemoPageComponent {

}