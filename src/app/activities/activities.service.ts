import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivitiesDescription} from './model/activities-description';
import {HttpWrapperService} from '../http-wrapper/http-wrapper.service';

@Injectable({
    providedIn: 'root'
})
export class ActivitiesService {

    constructor(private http: HttpWrapperService) {
    }

    public getActivitiesDescriptions(): Observable<ActivitiesDescription> {
        return this.http.get('content/activities/activities_description.json');
    }
}
