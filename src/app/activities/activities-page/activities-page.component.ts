import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {ActivitiesDescription, Activity, ActivityFullItem} from '../model/activities-description';
import {ActivitiesService} from '../activities.service';

@Component({
    selector: 'app-activities-page',
    templateUrl: './activities-page.component.html',
    styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit {

    activities: Array<ActivityFullItem>;
    intro: SafeHtml;
    private description: ActivitiesDescription;

    constructor(private translateService: TranslateService,
                private domSanitizer: DomSanitizer,
                private http: HttpWrapperService,
                private activitiesService: ActivitiesService) {
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData(): void {
        this.activitiesService.getActivitiesDescriptions().subscribe((description: ActivitiesDescription) => {
            this.description = description;
            this.loadIntro();
            this.loadActivityList();
        });
    }

    private loadIntro(): void {
        const lang = this.translateService.currentLang;
        const introUrl: string = this.description.activitiesInto[lang];
        this.http.getHtml(introUrl).subscribe((intro: string) => {
            this.intro = this.domSanitizer.bypassSecurityTrustHtml(intro);
        });
    }

    private loadActivityList(): void {
        const lang = this.translateService.currentLang;
        this.activities = this.description.activities.map((value: Activity) => {
            // TODO add default language and handling if there is no item for the current language
            const fullItem: ActivityFullItem = {...value[lang]} as any as ActivityFullItem;
            this.http.getHtml(fullItem.contentUrl).subscribe((content: string) => {
                fullItem.content = this.domSanitizer.bypassSecurityTrustHtml(content);
            });
            return fullItem;
        });
    }
}
