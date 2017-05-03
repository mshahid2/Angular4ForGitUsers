import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  isUserLogOut = false;

  constructor(private router: Router) { }

  logOut() {
    localStorage.removeItem('id_token');
    this.isUserLogOut = true;
    this.router.navigate(['login']);
  }

  ngOnInit() {
    const tokenID = localStorage.getItem('id_token');
    if (tokenID) {
      this.isUserLogOut = true;
    }
    else {
      this.isUserLogOut = false;
    }
  }

}
