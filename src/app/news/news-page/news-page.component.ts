import {Component, OnInit} from '@angular/core';
import {NewsDescription} from '../model/news-description';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

    newsDescription: NewsDescription;

    constructor(private http: HttpWrapperService) {
    }

    ngOnInit(): void {
        this.loadNewsDescription();
    }

    private loadNewsDescription(): void {
        this.http.get('content/news/news_description.json').subscribe((desciption: NewsDescription) => {
            this.newsDescription = desciption;
        });
    }
}
