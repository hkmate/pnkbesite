import {SafeHtml} from '@angular/platform-browser';
import {Language} from '../../language/language';

export class ActivitiesDescription {
    activitiesInto: ActivitiesInto;
    activities: Array<Activity>;
}

export class ActivityItem {
    title: string;
    contentUrl: string;
}

export class ActivityFullItem extends ActivityItem {
    content: SafeHtml;
}

export type Activity = {
    [key in Language]: ActivityItem;
};

export type ActivitiesInto = {
    [key in Language]: string; // contentUrl
};

