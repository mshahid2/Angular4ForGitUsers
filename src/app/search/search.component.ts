import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
import { Constants } from '../constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService, Constants]
})
export class SearchComponent implements OnInit {
  constructor(private router: Router, private searchService: SearchService, private constants: Constants) { }

  public searchText;
  public users;

  captureSearchContent(event) {
    this.searchText = event.target.value;
  }

  showUserDetail(user) {
    this.router.navigate(['user', user.login]);
  }

  getUser() {
    this.searchService.getUser(this.constants.gitUserAPI, this.searchText).subscribe(
      rs => 
      {
        rs;
        this.users = rs;
        return rs;
      }
    );
  }

  ngOnInit() {

  }

}
