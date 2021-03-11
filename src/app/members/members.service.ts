import {Injectable} from '@angular/core';
import {HttpWrapperService} from '../http-wrapper/http-wrapper.service';
import {Observable} from 'rxjs';
import {MemberDescription} from './model/member-description';

@Injectable({
    providedIn: 'root'
})
export class MembersService {

    constructor(private http: HttpWrapperService) {
    }

    public getMemberDescriptions(): Observable<Array<MemberDescription>> {
        return this.http.get('content/members/member_descriptions.json');
    }
}
