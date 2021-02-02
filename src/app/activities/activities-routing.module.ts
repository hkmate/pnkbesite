import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsModule} from '../news/news.module';
import {ActivitiesPageComponent} from './activities-page/activities-page.component';

const routes: Routes = [
    {path: '', component: ActivitiesPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        NewsModule
    ],
    exports: [RouterModule]
})
export class ActivitiesRoutingModule {
}
