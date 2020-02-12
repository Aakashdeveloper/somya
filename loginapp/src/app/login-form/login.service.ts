import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()

export class LoginService {
    private url = 'http://localhost:5000/api/auth/login';
    private userinfo = 'http://localhost:5000/api/auth/userinfo';

    constructor(private http: HttpClient) {}

    LoginUser(user): Observable<any[]> {
        return this.http.post<any[]>(this.url, user );
    }

    /*
       getProducts():Observable<IProduct[]>{
        return this._http.get(this._productUrl)
            .map((response:Response) => response.json())
            .catch(this.handleError)
    }
    */

    getUserInfo(token): Observable<any[]> {
        localStorage.setItem('TOKEN_NUMBER', token)
        return this.http.get<any[]>(this.userinfo, {headers:{'x-access-token':token}})
    }
}


