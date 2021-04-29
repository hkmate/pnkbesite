import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupportersPageComponent} from './supporters-page/supporters-page.component';
import {IndividualSupportersDataViewComponent} from './individual-supporters-data-view/individual-supporters-data-view.component';
import {DataViewModule} from 'primeng/dataview';
import {OnePercentSupporterTimeLineComponent} from './one-percent-supporter-time-line/one-percent-supporter-time-line.component';
import {CardModule} from 'primeng/card';
import {TranslateModule} from '@ngx-translate/core';
import {TimelineModule} from 'primeng/timeline';


@NgModule({
    declarations: [
        SupportersPageComponent,
        IndividualSupportersDataViewComponent,
        OnePercentSupporterTimeLineComponent
    ],
    imports: [
        CommonModule,

        DataViewModule,
        CardModule,
        TimelineModule,
        TranslateModule
    ]
})
export class SupportersModule {
}
