import {SafeHtml} from '@angular/platform-browser';
import {Language} from '../../language/language';

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

export type News = {
    [key in Language]: NewsItem;
};
