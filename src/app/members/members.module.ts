import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MembersPageComponent} from './members-page/members-page.component';
import {DataViewModule} from 'primeng/dataview';
import {TranslateModule} from '@ngx-translate/core';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    declarations: [MembersPageComponent],
    imports: [
        CommonModule,

        InputTextModule,
        DataViewModule,
        TranslateModule,
    ]
})
export class MembersModule {
}
