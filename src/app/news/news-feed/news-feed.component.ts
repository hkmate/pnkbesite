import {Component, Input} from '@angular/core';
import {News, NewsFullItem} from '../model/news-description';
import {TranslateService} from '@ngx-translate/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-news-feed',
    templateUrl: './news-feed.component.html',
    styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent {

    newItems: Array<NewsFullItem>;
    private _news: Array<News>;

    constructor(private translateService: TranslateService,
                private domSanitizer: DomSanitizer,
                private http: HttpWrapperService) {
    }

    @Input()
    set news(_news: Array<News>) {
        this._news = _news;
        if (!!this._news) {
            this.loadNews();
        }
    }

    get news(): Array<News> {
        return this._news;
    }

    private loadNews(): void {
        const lang = this.translateService.currentLang;
        this.newItems = this.news.map((value: News) => {
            // TODO add default language and handling if there is no item for the current language
            const fullItem: NewsFullItem = {...value[lang]} as any as NewsFullItem;
            this.http.getHtml(fullItem.contentUrl).subscribe((content: string) => {
                fullItem.content = this.domSanitizer.bypassSecurityTrustHtml(content);
            });
            return fullItem;
        });
    }
}
