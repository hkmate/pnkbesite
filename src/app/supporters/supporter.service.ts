import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../http-wrapper/http-wrapper.service';
import {Observable} from 'rxjs';
import {SupportersDescription} from './model/supporter';

@Injectable({
    providedIn: 'root'
})
export class SupporterService {

    constructor(private http: HttpWrapperService) {
    }

    public getSupportersDescriptions(): Observable<SupportersDescription> {
        return this.http.get('content/supporters/supporters_description.json');
    }
}
