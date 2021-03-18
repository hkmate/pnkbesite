import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsPageComponent} from './news-page/news-page.component';
import {SplitterModule} from 'primeng/splitter';
import {CardModule} from 'primeng/card';
import {FacebookFeedComponent} from './facebook-feed/facebook-feed.component';
import {TranslateModule} from '@ngx-translate/core';
import {NewsFeedComponent} from './news-feed/news-feed.component';

@NgModule({
    declarations: [NewsPageComponent, FacebookFeedComponent, NewsFeedComponent],
    imports: [
        CommonModule,

        SplitterModule,
        CardModule,
        TranslateModule
    ]
})
export class NewsModule {
}
