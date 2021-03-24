import {Component, OnDestroy, OnInit} from '@angular/core';
import {AboutUsBlock, AboutUsItem} from '../model/about-us';
import {AboutUsService} from '../about-us.service';
import {TranslateService} from '@ngx-translate/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {isNotNullOrUndefined, isNullOrUndefined} from '../../util';
import {LanguageService} from '../../language/language.service';

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit, OnDestroy {

    items: Array<AboutUsItem>;
    private aboutUsBlocks: Array<AboutUsBlock>;
    private langSubscription: Subscription;

    constructor(private domSanitizer: DomSanitizer,
                private translateService: TranslateService,
                private http: HttpWrapperService,
                private langService: LanguageService,
                private aboutUsService: AboutUsService) {
    }

    ngOnInit(): void {
        this.loadData();
        this.langSubscription = this.translateService.onLangChange.subscribe(() => {
            this.processBlocks();
        });
    }

    ngOnDestroy(): void {
        if (isNotNullOrUndefined(this.langSubscription)) {
            this.langSubscription.unsubscribe();
        }
    }

    private loadData(): void {
        this.aboutUsService.getAboutUsDescriptions().subscribe((blocks: Array<AboutUsBlock>) => {
            this.aboutUsBlocks = blocks;
            this.processBlocks();
        });
    }

    private processBlocks(): void {
        if (isNullOrUndefined(this.aboutUsBlocks)) {
            return;
        }
        this.items = this.aboutUsBlocks.map((value: AboutUsBlock) => {
            const fullItem: AboutUsItem = {} as AboutUsItem;
            this.http.getHtml(this.langService.resolveI18nValue(value)).subscribe((content: string) => {
                fullItem.content = this.domSanitizer.bypassSecurityTrustHtml(content);
            });
            return fullItem;
        });
    }
}
