import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActivitiesPageComponent} from './activities-page/activities-page.component';
import {ActivitiesModule} from './activities.module';

const routes: Routes = [
    {path: '', component: ActivitiesPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        ActivitiesModule
    ],
    exports: [RouterModule]
})
export class ActivitiesRoutingModule {
}
