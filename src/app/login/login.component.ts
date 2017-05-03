import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Constants } from '../constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService, Constants]
})
export class LoginComponent implements OnInit {

  user: any = {};
  isUserLoggedIn: boolean = false;
  constructor(private authenticationService: AuthenticationService, private constants: Constants,
    private router: Router) { }

  captureLoginDetail() {
    const userName = this.user.Email;
    const password = this.user.Password;
    const URL = this.constants.authenticateURL + userName + "/";
    this.authenticationService.validateUserinDB(URL).subscribe(
      res => {
        const result = res;
        localStorage.setItem('id_token', result.id);
        this.isUserLoggedIn = true;
        this.redirect();
        return result;
      }
    )

  }

  redirect() {
    this.router.navigate(["/search"]);
  }

  ngOnInit() {
  }

}
