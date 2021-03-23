import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from './language/language';
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
        this.initLanguage();
        this.setTitle();
    }

    private initLanguage(): void {
        this.translateService.addLangs(Object.values(Language));
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|hu/) ? browserLang : Language.EN);
    }

    private setTitle(): void {
        this.translateService.get('PageTitle').subscribe((title: string) => {
            this.titleService.setTitle(title);
        });
    }
}
