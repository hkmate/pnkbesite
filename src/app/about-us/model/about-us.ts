import {SafeHtml} from '@angular/platform-browser';
import {Language} from '../../language/language';

export class AboutUsItem {
    content: SafeHtml;
}

export type AboutUsBlock = {
    [key in Language]: string; // contentUrl
};
