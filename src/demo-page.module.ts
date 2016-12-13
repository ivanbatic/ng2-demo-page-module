import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Ng2SelectModule} from "ng2-material-select/src/ng2-select.module";
import {DemoPageComponent} from "./demo-page.component";


@NgModule({
    imports: [
        CommonModule,
        Ng2SelectModule
    ],
    declarations: [
        DemoPageModule,
    ],
    exports: [
        DemoPageComponent
    ]
})
export class DemoPageModule {
}
