import {SafeHtml} from '@angular/platform-browser';
import {I18nObject} from '../../language/i18n-object';

export class AboutUsItem {
    content: SafeHtml;
}

export type AboutUsBlock = I18nObject<string>; // contentUrl
