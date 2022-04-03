import {Component, OnInit} from '@angular/core';
import {HttpWrapperService} from '../../http-wrapper/http-wrapper.service';


interface LinkData {
    facebookLink: string;
    youtubeLink: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    private static readonly LINK_URLS = 'content/general/links.json';

    links: LinkData;

    constructor(private http: HttpWrapperService) {
    }

    ngOnInit(): void {
        this.http.get<LinkData>(HeaderComponent.LINK_URLS).subscribe((links: LinkData) => this.links = links);
    }
}
