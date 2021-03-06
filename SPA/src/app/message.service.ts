import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http } from '@angular/http';
import { Message } from './message';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt/angular2-jwt';

@Injectable()
export class MessageService {
    private messageUrl = 'https://localhost:44387/api/';

    constructor(private http: AuthHttp) {}

    getMessage(id: number): Promise<Message> { 
        return this.http.get(this.messageUrl + 'message/' + id)
            .toPromise()
            .then(response => response.json() as Message)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}