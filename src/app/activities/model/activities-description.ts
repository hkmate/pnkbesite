import {SafeHtml} from '@angular/platform-browser';
import {Language} from '../../language/language';
import {I18nObject} from '../../language/i18n-object';

export class ActivitiesDescription {
    activitiesInto: ActivitiesInto;
    activityGroups: Array<ActivityGroup>;
}

export class ActivityGroup {
    name: I18nObject<string>;
    items: Array<Activity>;
}

export type ActivitySelection = Array<{
    group: boolean;
    items: Array<boolean>;
}>;

export class FullActivityGroup {
    name: string;
    items: Array<ActivityFullItem>;
}

export class ActivityItem {
    id: string;
    title: string;
    contentUrl: string;
}

export class ActivityFullItem extends ActivityItem {
    content: SafeHtml;
}

export type Activity = {
    id: string;
    i18n: {
        [key in Language]: ActivityItem;
    };
};

export type ActivitiesInto = I18nObject<string>; // contentUrl
