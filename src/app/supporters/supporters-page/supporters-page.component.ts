import {Component, OnDestroy, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {SupportersDescription} from '../model/supporter';
import {isNotNullOrUndefined, isNullOrUndefined} from '../../util';
import {TranslateService} from '@ngx-translate/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {LanguageService} from '../../language/language.service';
import {SupporterService} from '../supporter.service';

@Component({
    selector: 'app-supporters-page',
    templateUrl: './supporters-page.component.html',
    styleUrls: ['./supporters-page.component.scss']
})
export class SupportersPageComponent implements OnInit, OnDestroy {

    supporterInfo: SupportersDescription;
    textInfo: SafeHtml;
    private langSubscription: Subscription;

    constructor(private domSanitizer: DomSanitizer,
                private translateService: TranslateService,
                private http: HttpWrapperService,
                private langService: LanguageService,
                private supporterService: SupporterService) {
    }

    ngOnInit(): void {
        this.loadData();
        this.langSubscription = this.translateService.onLangChange.subscribe(() => {
            this.processTextInfo();
        });
    }

    ngOnDestroy(): void {
        if (isNotNullOrUndefined(this.langSubscription)) {
            this.langSubscription.unsubscribe();
        }
    }

    private loadData(): void {
        this.supporterService.getSupportersDescriptions().subscribe((info: SupportersDescription) => {
            this.supporterInfo = info;
            this.processTextInfo();
        });
    }

    private processTextInfo(): void {
        if (isNullOrUndefined(this.supporterInfo)) {
            return;
        }

        this.http.getHtml(this.langService.resolveI18nValue(this.supporterInfo.contentUrl)).subscribe((content: string) => {
            this.textInfo = this.domSanitizer.bypassSecurityTrustHtml(content);
        });
    }
}
