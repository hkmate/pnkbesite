import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {ActivitiesDescription, Activity, ActivityFullItem} from '../model/activities-description';
import {ActivitiesService} from '../activities.service';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../language/language.service';
import {isNotNullOrUndefined, isNullOrUndefined} from '../../util';

@Component({
    selector: 'app-activities-page',
    templateUrl: './activities-page.component.html',
    styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit, OnDestroy {

    activities: Array<ActivityFullItem>;
    intro: SafeHtml;
    private description: ActivitiesDescription;
    private langSubscription: Subscription;

    constructor(private translateService: TranslateService,
                private domSanitizer: DomSanitizer,
                private http: HttpWrapperService,
                private langService: LanguageService,
                private activitiesService: ActivitiesService) {
    }

    ngOnInit(): void {
        this.loadData();
        this.langSubscription = this.translateService.onLangChange.subscribe(() => {
            this.loadIntro();
            this.loadActivityList();
        });
    }

    ngOnDestroy(): void {
        if (isNotNullOrUndefined(this.langSubscription)) {
            this.langSubscription.unsubscribe();
        }
    }

    private loadData(): void {
        this.activitiesService.getActivitiesDescriptions().subscribe((description: ActivitiesDescription) => {
            this.description = description;
            this.loadIntro();
            this.loadActivityList();
        });
    }

    private loadIntro(): void {
        if (isNullOrUndefined(this.description)) {
            return;
        }

        const introUrl: string = this.langService.resolveI18nValue(this.description.activitiesInto);
        this.http.getHtml(introUrl).subscribe((intro: string) => {
            this.intro = this.domSanitizer.bypassSecurityTrustHtml(intro);
        });
    }

    private loadActivityList(): void {
        if (isNullOrUndefined(this.description)) {
            return;
        }
        this.activities = this.description.activities.map((value: Activity) => {
            const fullItem: ActivityFullItem = {...this.langService.resolveI18nValue(value)} as any as ActivityFullItem;
            this.http.getHtml(fullItem.contentUrl).subscribe((content: string) => {
                fullItem.content = this.domSanitizer.bypassSecurityTrustHtml(content);
            });
            return fullItem;
        });
    }
}
