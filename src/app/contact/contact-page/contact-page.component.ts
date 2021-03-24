import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactDescription} from '../model/contact-description';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {ContactService} from '../contact.service';
import {isNotNullOrUndefined, isNullOrUndefined} from '../../util';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../language/language.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

    info: ContactDescription;
    textInfo: SafeHtml;
    private langSubscription: Subscription;

    constructor(private domSanitizer: DomSanitizer,
                private translateService: TranslateService,
                private http: HttpWrapperService,
                private langService: LanguageService,
                private contactService: ContactService) {
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
        this.contactService.getContactDescriptions().subscribe((info: ContactDescription) => {
            this.info = info;
            this.processTextInfo();
        });
    }

    private processTextInfo(): void {
        if (isNullOrUndefined(this.info)) {
            return;
        }

        this.http.getHtml(this.langService.resolveI18nValue(this.info.otherInfo)).subscribe((content: string) => {
            this.textInfo = this.domSanitizer.bypassSecurityTrustHtml(content);
        });
    }
}
