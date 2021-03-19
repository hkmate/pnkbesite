import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactPageComponent} from './contact-page/contact-page.component';
import {CardModule} from 'primeng/card';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
    declarations: [ContactPageComponent],
    imports: [
        CommonModule,

        CardModule,
        TranslateModule
    ]
})
export class ContactModule {
}
