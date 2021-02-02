import {RouterModule, Routes} from '@angular/router';
import {NewsPageComponent} from './news-page/news-page.component';
import {NgModule} from '@angular/core';
import {NewsModule} from './news.module';

const routes: Routes = [
    {path: '', component: NewsPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),

        NewsModule
    ],
    exports: [RouterModule]
})
export class NewsRoutingModule {
}
