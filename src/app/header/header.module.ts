import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {TabMenuModule} from 'primeng/tabmenu';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        TranslateModule,
        TabMenuModule
    ],
    declarations: [
        HeaderComponent,
        MenuComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule {

}
