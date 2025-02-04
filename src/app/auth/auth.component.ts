import { Component } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
})
export class AuthComponent {
    signInForm = new FormGroup({
      access_key: new FormControl<string>('', [Validators.required]),
    });

    constructor(private authService: AuthService) { }

    signIn() {
        if (this.signInForm.valid) {
            this.authService.signIn(this.signInForm.value.access_key as string);
        }
    }
}