import {Component, OnInit} from '@angular/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    private static readonly FACEBOOK_LINK_URL = 'content/general/facebook-link.txt';

    facebookLink: string;

    constructor(private http: HttpWrapperService) {
    }

    ngOnInit(): void {
        this.http.getText(HeaderComponent.FACEBOOK_LINK_URL).subscribe((link: string) => this.facebookLink = link);
    }
}
