import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../http-wrapper/http-wrapper.service';
import {Observable} from 'rxjs';
import {AboutUsBlock} from './model/about-us';

@Injectable({
    providedIn: 'root'
})
export class AboutUsService {

    constructor(private http: HttpWrapperService) {
    }

    public getAboutUsDescriptions(): Observable<Array<AboutUsBlock>> {
        return this.http.get('content/about-us/about-us_description.json');
    }
}
