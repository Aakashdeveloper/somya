import {Component} from '@angular/core';
import { IRegister } from './regsiter.model';
import { NgForm} from '@angular/forms';
import { RegisterService } from './registerForm.service';

@Component({
    selector: 'app-foarms',
    templateUrl: './registerForm.component.html',
    styleUrls: ['./registerForm.component.css']
})

export class RegisterFormComponent {
    constructor(private registerService: RegisterService) {}

    myUser = new IRegister('john', 'a@a.com', '12345');


    firstToUpper(value): void {
        if (value.length > 0 ) {
            this.myUser.name = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.myUser.name = value;
        }
    }

    submitForm(form: NgForm): void {
        console.log(form.value);
        this.registerService.RegisterUser(form.value)
        .subscribe((res) => console.log('submited'));
    }

}
