import {Component, Input} from "@angular/core";
@Component({
    selector: "demo-page",
    template: `
        Page Content: {{ }}
    `


})
export class DemoPageComponent {
    @Input()
    public options;
}