import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SupportersModule} from './supporters.module';
import {SupportersPageComponent} from './supporters-page/supporters-page.component';

const routes: Routes = [
    {path: '', component: SupportersPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        SupportersModule
    ],
    exports: [RouterModule]
})
export class SupportersRoutingModule {
}
