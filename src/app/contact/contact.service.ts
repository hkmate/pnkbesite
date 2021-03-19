import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../http-wrapper/http-wrapper.service';
import {Observable} from 'rxjs';
import {ContactDescription} from './model/contact-description';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor(private http: HttpWrapperService) {
    }

    public getContactDescriptions(): Observable<ContactDescription> {
        return this.http.get('content/contact/contact_description.json');
    }
}
