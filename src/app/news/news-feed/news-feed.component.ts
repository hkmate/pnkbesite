import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {News, NewsFullItem} from '../model/news-description';
import {TranslateService} from '@ngx-translate/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {isNotNullOrUndefined, isNullOrUndefined} from '../../util';
import {LanguageService} from '../../language/language.service';

@Component({
    selector: 'app-news-feed',
    templateUrl: './news-feed.component.html',
    styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit, OnDestroy {

    newItems: Array<NewsFullItem>;
    private langSubscription: Subscription;

    constructor(private translateService: TranslateService,
                private domSanitizer: DomSanitizer,
                private http: HttpWrapperService,
                private langService: LanguageService) {
    }

    private _news: Array<News>;

    get news(): Array<News> {
        return this._news;
    }

    @Input()
    set news(_news: Array<News>) {
        this._news = _news;
        if (!!this._news) {
            this.loadNews();
        }
    }

    ngOnInit(): void {
        this.langSubscription = this.translateService.onLangChange.subscribe(() => {
            this.loadNews();
        });
    }

    ngOnDestroy(): void {
        if (isNotNullOrUndefined(this.langSubscription)) {
            this.langSubscription.unsubscribe();
        }
    }

    private loadNews(): void {
        if (isNullOrUndefined(this.news)) {
            return;
        }
        this.newItems = this.news.map((value: News) => {
            const fullItem: NewsFullItem = {...this.langService.resolveI18nValue(value)} as any as NewsFullItem;
            this.http.getHtml(fullItem.contentUrl).subscribe((content: string) => {
                fullItem.content = this.domSanitizer.bypassSecurityTrustHtml(content);
            });
            return fullItem;
        });
    }
}
