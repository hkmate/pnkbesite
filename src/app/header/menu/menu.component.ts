import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {

    menuItems: Array<MenuItem>;
    private langSubscription: Subscription;

    constructor(private translateService: TranslateService) {
    }

    ngOnInit(): void {
        this.langSubscription = this.translateService.onLangChange.subscribe(() => this.setUpMenuItems());
    }

    ngOnDestroy(): void {
        this.langSubscription?.unsubscribe();
    }

    private setUpMenuItems(): void {
        this.menuItems = [
            {label: this.translateService.instant('Menu.News'), routerLink: 'news'},
            {label: this.translateService.instant('Menu.AboutUs'), routerLink: 'about-us'},
            {label: this.translateService.instant('Menu.Activities'), routerLink: 'activities'},
            {label: this.translateService.instant('Menu.Members'), routerLink: 'members'},
            {label: this.translateService.instant('Menu.Contact'), routerLink: 'contact'},
        ];
    }
}
