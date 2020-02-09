import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable()


export class ProfileService {

    private userinfo = 'http://localhost:5000/api/auth/userinfo';
    private allUserInfo = 'http://localhost:5000/api/auth/users';

    constructor(private http: HttpClient) {}

    getUserInfo(token): Observable<any[]>{
        return this.http.get<any[]>(this.userinfo, {headers:{'x-access-token':token}})
    }

    allUser(): Observable<any[]> {
        return this.http.get<any[]>(this.allUserInfo)
    }


}