import {Component} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    menuItems: Array<MenuItem> = [
        {label: 'News', routerLink: 'news', icon: 'pi pi-fw pi-info-circle'},
        {label: 'About us', routerLink: 'about-us', icon: 'pi pi-fw pi-compass'},
        {label: 'Activities', routerLink: 'activities', icon: 'pi pi-fw pi-cog'},
        {label: 'Members', routerLink: 'members', icon: 'pi pi-fw pi-users'},
        {label: 'Contact', routerLink: 'contact', icon: 'pi pi-fw pi-home'},
    ];
}
