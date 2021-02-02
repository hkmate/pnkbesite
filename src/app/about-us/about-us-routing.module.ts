import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AboutUsModule} from './about-us.module';
import {AboutUsPageComponent} from './about-us-page/about-us-page.component';

const routes: Routes = [
    {path: '', component: AboutUsPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        AboutUsModule
    ],
    exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
