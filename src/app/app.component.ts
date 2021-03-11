import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from './language/language';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.initLanguage();
    }

    private initLanguage(): void {
        this.translateService.addLangs(Object.values(Language));
        const browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|hu/) ? browserLang : Language.EN);
    }
}
