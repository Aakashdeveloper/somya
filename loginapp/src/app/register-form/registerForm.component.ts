import {Component} from '@angular/core';
import { IRegister } from './regsiter.model';

@Component({
    selector: 'app-forms',
    templateUrl: './registerForm.component.html',
    styleUrls: ['./registerForm.component.css']
})

export class RegisterFormComponent {

    myUser = new IRegister('A', 'B');

}
