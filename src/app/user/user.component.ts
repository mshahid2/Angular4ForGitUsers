import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';
import { Constants } from '../constants';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [SearchService, Constants]
})

export class UserComponent implements OnInit 
{
  public userDetail;
  public userId;
  constructor(private searchService: SearchService, private activatedRoute: ActivatedRoute, private constants: Constants) { }

  ngOnInit() 
  {
    const userId = this.activatedRoute.snapshot.params['userId'];
    this.searchService.getUserDetail(this.constants.gituserDetailAPI, userId).subscribe(
      res => 
      {
        res;
        this.userDetail = res;
        return res;
      }
    );
  }

}
