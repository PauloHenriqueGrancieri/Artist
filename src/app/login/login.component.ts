// login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  passwordInputType: string = 'password';
  passwordVisibilityIcon: string = 'assets/images/eye-icon.png'; // Default eye icon

  onBlur(control: NgModel) {
    control.control.markAsTouched();
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      // Handle valid form submission
      console.log('Form Submitted', loginForm.value);
    } else {
      // Handle invalid form submission
      console.log('Form Invalid');
    }
  }

  togglePasswordVisibility() {
    if (this.passwordInputType === 'password') {
      this.passwordInputType = 'text';
      this.passwordVisibilityIcon = 'assets/images/eye-off-icon.png'; // Eye off icon
    } else {
      this.passwordInputType = 'password';
      this.passwordVisibilityIcon = 'assets/images/eye-icon.png'; // Eye icon
    }
  }
}
