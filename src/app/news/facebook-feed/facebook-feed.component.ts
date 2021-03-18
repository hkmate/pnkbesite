import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
    selector: 'app-facebook-feed',
    templateUrl: './facebook-feed.component.html',
    styleUrls: ['./facebook-feed.component.scss']
})
export class FacebookFeedComponent implements AfterViewInit {

    @Input()
    facebookPageLink: string;

    ngAfterViewInit(): void {
        this.loadFbScript();
    }

    // TODO do something to reopen the page plugin after routing there and back again
    private loadFbScript(): void {
        const fbscript = document.getElementById('facebook-jssdk');
        if (!!fbscript) {
            fbscript.parentElement.removeChild(fbscript);
        }

        const facebookScript: any = document.createElement('script');
        facebookScript.id = 'facebook-jssdk';
        facebookScript.src = '//connect.facebook.net/hu_HU/sdk.js#xfbml=1&version=v10.0';

        const storedScript = document.getElementsByTagName('script')[0];
        storedScript.parentNode.insertBefore(facebookScript, storedScript);
    }
}
