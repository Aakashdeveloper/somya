import { Component} from '@angular/core';
import { ProfileService} from './profile.service';
import { Router} from '@angular/router';


@Component({
    templateUrl: './profileForm.component.html',
    styleUrls: ['./profileForm.component.css']
})

export class ProfileComponent {
    token;
    userInfo;
    userList;

    constructor(
        private profileService: ProfileService,
        private router: Router
    ){}

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
}
