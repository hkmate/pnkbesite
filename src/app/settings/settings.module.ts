import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './settings/settings.component';
import {TranslateModule} from '@ngx-translate/core';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {RippleModule} from 'primeng/ripple';
import {ButtonModule} from 'primeng/button';


@NgModule({
    declarations: [SettingsComponent],
    imports: [
        CommonModule,
        FormsModule,

        TranslateModule,
        CardModule,
        DropdownModule,
        RippleModule,
        ButtonModule,
    ]
})
export class SettingsModule {
}
