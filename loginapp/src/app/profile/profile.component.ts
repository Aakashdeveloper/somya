import { Component} from '@angular/core';
import { ProfileService} from './profile.service';
import { Router} from '@angular/router';
import {NorthwindService } from './kendo.serrvice';
import { State } from '@progress/kendo-data-query';
import {
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';
import { Observable} from 'rxjs';


@Component({
    templateUrl: './profileForm.component.html',
    styleUrls: ['./profileForm.component.css']
})

export class ProfileComponent {
    token;
    userInfo;
    userList;
    public view: Observable<GridDataResult>;
    public state: State = {
        skip: 0,
        take: 5
    };

    constructor(
        private profileService: ProfileService,
        private router: Router,
        private service: NorthwindService
    ){
        this.view = service;
        this.service.query(this.state);
    }

    ngOnInit(){
        this.token = localStorage.getItem('TOKEN_NUMBER')
        this.profileService.getUserInfo(this.token)
            .subscribe((res) =>  this.userInfo = res)
        this.profileService.allUser()
            .subscribe((res) =>  this.userList= res)
    }


    logout(){
        localStorage.removeItem('TOKEN_NUMBER');
        localStorage.removeItem('USER_TYPE');
        this.router.navigate(['login'])
    }

    public dataStateChange(state: DataStateChangeEvent): void {
        this.state = state;
        this.service.query(state);
    }
}

