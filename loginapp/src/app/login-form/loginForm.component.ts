import { Component} from '@angular/core';
import { LoginService} from './login.service';
import { NgForm} from '@angular/forms';
import { ILogin} from './login.model';
import { Router} from '@angular/router';


@Component({
    templateUrl: './loginForm.component.html',
    styleUrls: ['./loginForm.component.css']
})

export class LoginComponent {

    constructor(private loginService: LoginService,
                private router: Router) {}
    
                
    myUser = new ILogin('', '')

    submitForm(form: NgForm): void{
        this.loginService.LoginUser(form.value)
            .subscribe((res) => this.loginService.getUserInfo(res['token'])
            .subscribe((response) => {
                this.userRole(response["role"])
            }))
           
    }

    userRole(typeOfUser): void {
        localStorage.setItem('USER_TYPE', typeOfUser)
        this.router.navigate(['/profile'])
    }


    

}
