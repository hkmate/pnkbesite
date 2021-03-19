import {Component, OnInit} from '@angular/core';
import {AboutUsBlock, AboutUsItem} from '../model/about-us';
import {AboutUsService} from '../about-us.service';
import {TranslateService} from '@ngx-translate/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

    items: Array<AboutUsItem>;
    private aboutUsBlocks: Array<AboutUsBlock>;

    constructor(private domSanitizer: DomSanitizer,
                private translateService: TranslateService,
                private http: HttpWrapperService,
                private aboutUsService: AboutUsService) {
    }

    ngOnInit(): void {
        this.loadNews();
    }

    private loadNews(): void {
        this.aboutUsService.getAboutUsDescriptions().subscribe((blocks: Array<AboutUsBlock>) => {
            this.aboutUsBlocks = blocks;
            this.processBlocks();
        });
    }

    private processBlocks(): void {
        const lang = this.translateService.currentLang;

        this.items = this.aboutUsBlocks.map((value: AboutUsBlock) => {
            // TODO add default language and handling if there is no item for the current language
            const fullItem: AboutUsItem = {} as AboutUsItem;
            this.http.getHtml(value[lang]).subscribe((content: string) => {
                fullItem.content = this.domSanitizer.bypassSecurityTrustHtml(content);
            });
            return fullItem;
        });
    }
}
