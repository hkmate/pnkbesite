import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpWrapperService {

    private BASE_URL = '/assets/';

    constructor(private http: HttpClient) {
    }

    public get<T>(url: string): Observable<T> {
        return this.http.get<T>(this.BASE_URL + url);
    }

    public getHtml(url: string): Observable<string> {
        return this.http.get(this.BASE_URL + url, {responseType: 'text'});
    }
}
