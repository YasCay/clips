import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  }

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue';

  login() {
    console.log(this.credentials)
    this.showAlert = true;
    this.alertMsg = 'You are succesfully logged in.';
    this.alertColor = 'blue';
  }
}
