import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';
import {
    ActivitiesDescription,
    Activity,
    ActivityFullItem,
    ActivityGroup, ActivitySelection,
    FullActivityGroup
} from '../model/activities-description';
import {ActivitiesService} from '../activities.service';
import {Subscription} from 'rxjs';
import {LanguageService} from '../../language/language.service';
import {isNotNullOrUndefined, isNullOrUndefined} from '../../util';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-activities-page',
    templateUrl: './activities-page.component.html',
    styleUrls: ['./activities-page.component.scss']
})
export class ActivitiesPageComponent implements OnInit, OnDestroy {

    activityGroups: Array<FullActivityGroup>;
    intro: SafeHtml;
    tabSelectionMatrix: ActivitySelection;

    private description: ActivitiesDescription;
    private selectedActivity: string;
    private langSubscription: Subscription;

    constructor(private translateService: TranslateService,
                private activatedRoute: ActivatedRoute,
                private domSanitizer: DomSanitizer,
                private http: HttpWrapperService,
                private langService: LanguageService,
                private activitiesService: ActivitiesService) {
    }

    ngOnInit(): void {
        this.selectedActivity = this.activatedRoute.snapshot.queryParams.id;
        this.loadData().then(() => {
            this.setupSelectionMatrix();
            this.openSelected();
        });
        this.langSubscription = this.translateService.onLangChange.subscribe(async () => {
            await this.loadIntro();
            await this.loadActivityList();
        });
    }

    ngOnDestroy(): void {
        if (isNotNullOrUndefined(this.langSubscription)) {
            this.langSubscription.unsubscribe();
        }
    }

    private openSelected(): void {
        const selectedIndex: { group: number, activity: number } = this.findSelected();
        if (isNullOrUndefined(selectedIndex)) {
            return;
        }

        this.tabSelectionMatrix[selectedIndex.group].group = true;
        this.tabSelectionMatrix[selectedIndex.group].items[selectedIndex.activity] = true;
    }

    private findSelected(): { group: number, activity: number } {
        for (let i = 0; i < this.activityGroups.length; ++i) {
            for (let j = 0; j < this.activityGroups[i].items.length; ++j) {
                if (this.activityGroups[i].items[j].id === this.selectedActivity) {
                    return {group: i, activity: j};
                }
            }
        }
        return null;
    }

    private async loadData(): Promise<void> {
        this.description = await this.activitiesService.getActivitiesDescriptions().toPromise();
        await this.loadIntro();
        await this.loadActivityList();
    }

    private async loadIntro(): Promise<void> {
        if (isNullOrUndefined(this.description)) {
            return;
        }

        const introUrl: string = this.langService.resolveI18nValue(this.description.activitiesInto);
        const i18nIntro = await this.http.getHtml(introUrl).toPromise();
        this.intro = this.domSanitizer.bypassSecurityTrustHtml(i18nIntro);
    }

    private async loadActivityList(): Promise<void> {
        if (isNullOrUndefined(this.description)) {
            return;
        }

        const groupItems: Array<Array<ActivityFullItem>> = await Promise.all(
            this.description.activityGroups.map((value: ActivityGroup) => this.wrapLoadActivityItemToAPromise(value.items))
        );

        this.activityGroups = this.description.activityGroups.map(
            (value: ActivityGroup, index: number) => ({
                name: this.langService.resolveI18nValue(value.name),
                items: groupItems[index]
            })
        );
    }

    private async wrapLoadActivityItemToAPromise(act: Array<Activity>): Promise<Array<ActivityFullItem>> {
        const promises = act.map((activity: Activity): Promise<ActivityFullItem> => this.loadActivityItem(activity));
        return Promise.all(promises);
    }

    private async loadActivityItem(activity: Activity): Promise<ActivityFullItem> {
        const fullItem: ActivityFullItem = {
            id: activity.id,
            ...this.langService.resolveI18nValue(activity.i18n)
        } as any as ActivityFullItem;
        const i18nContent = await this.http.getHtml(fullItem.contentUrl).toPromise();
        fullItem.content = this.domSanitizer.bypassSecurityTrustHtml(i18nContent);
        return fullItem;
    }

    private setupSelectionMatrix(): void {
        this.tabSelectionMatrix = this.activityGroups.map((value: FullActivityGroup) => ({
            group: false,
            items: value.items.map(() => false)
        }));
    }
}
