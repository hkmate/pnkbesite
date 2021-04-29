import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {OnePercentSupport, OnePercentSupports} from '../model/supporter';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {Subscription} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import {isNotNullOrUndefined, isNullOrUndefined} from '../../util';
import {LanguageService} from '../../language/language.service';

@Component({
    selector: 'app-one-percent-supporter-time-line',
    templateUrl: './one-percent-supporter-time-line.component.html',
    styleUrls: ['./one-percent-supporter-time-line.component.scss']
})
export class OnePercentSupporterTimeLineComponent implements OnInit, OnDestroy {

    translatedText: { [year: number]: SafeHtml } = {};

    private langSubscription: Subscription;
    private _onePercentSupports: OnePercentSupports;

    constructor(private domSanitizer: DomSanitizer,
                private translateService: TranslateService,
                private langService: LanguageService) {
    }

    @Input()
    set onePercentSupports(value: OnePercentSupports) {
        this._onePercentSupports = value;
        this.processTexts();
    }

    get onePercentSupports(): OnePercentSupports {
        return this._onePercentSupports;
    }

    ngOnInit(): void {
        this.langSubscription = this.translateService.onLangChange.subscribe(() => {
            this.processTexts();
        });
    }

    ngOnDestroy(): void {
        if (isNotNullOrUndefined(this.langSubscription)) {
            this.langSubscription.unsubscribe();
        }
    }

    private processTexts(): void {
        if (isNullOrUndefined(this.onePercentSupports)) {
            return;
        }

        this.translatedText = {};
        this._onePercentSupports.forEach((s: OnePercentSupport) => {
            const translated = this.langService.resolveI18nValue(s.description);
            this.translatedText[s.year] = this.domSanitizer.bypassSecurityTrustHtml(translated);
        });
    }
}
