import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private titleService: Title,
                private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.setTitle();
    }

    private setTitle(): void {
        this.translateService.get('PageTitle').subscribe((title: string) => {
            this.titleService.setTitle(title);
        });
    }
}
