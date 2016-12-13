import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DemoPageComponent} from "./demo-page.component";


@NgModule({
    imports: [
        CommonModule,
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
