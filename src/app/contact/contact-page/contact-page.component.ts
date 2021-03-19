import {Component, OnInit} from '@angular/core';
import {ContactDescription} from '../model/contact-description';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {ContactService} from '../contact.service';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

    info: ContactDescription;
    textInfo: SafeHtml;

    constructor(private domSanitizer: DomSanitizer,
                private translateService: TranslateService,
                private http: HttpWrapperService,
                private contactService: ContactService) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData(): void {
        this.contactService.getContactDescriptions().subscribe((info: ContactDescription) => {
            this.info = info;
            this.processTextInfo();
        });
    }

    private processTextInfo(): void {
        const lang = this.translateService.currentLang;
        // TODO i18n: check if lang changed or not available the text in the current...
        this.http.getHtml(this.info.otherInfo[lang]).subscribe((content: string) => {
            this.textInfo = this.domSanitizer.bypassSecurityTrustHtml(content);
        });
    }
}
