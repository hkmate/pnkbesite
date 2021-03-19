import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsPageComponent} from './about-us-page/about-us-page.component';
import {CardModule} from 'primeng/card';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [AboutUsPageComponent],
    imports: [
        CommonModule,

        CardModule,
        TranslateModule
    ]
})
export class AboutUsModule {
}
