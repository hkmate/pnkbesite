import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivitiesPageComponent} from './activities-page/activities-page.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';


@NgModule({
    declarations: [ActivitiesPageComponent],
    imports: [
        CommonModule,

        TranslateModule,
        CardModule,
        AccordionModule,
    ]
})
export class ActivitiesModule {
}
