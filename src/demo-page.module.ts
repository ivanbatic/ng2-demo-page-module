import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DemoPageComponent} from "./demo-page.component";
import {DemoButtonModule} from "demo-button-module/src/demo-button.module";


@NgModule({
    imports: [
        CommonModule,
        DemoButtonModule
    ],
    declarations: [
        DemoPageComponent,
    ],
    exports: [
        DemoPageComponent
    ]
})
export class DemoPageModule {
}
