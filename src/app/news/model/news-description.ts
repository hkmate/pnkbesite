import {SafeHtml} from '@angular/platform-browser';
import {I18nObject} from '../../language/i18n-object';

export class NewsDescription {
    facebookPageLink: string;
    news: Array<News>;
}

export class NewsItem {
    title: string;
    contentUrl: string;
}

export class NewsFullItem extends NewsItem {
    content: SafeHtml;
}

export type News = I18nObject<NewsItem>;
