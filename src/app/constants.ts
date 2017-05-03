import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

    public gitUserAPI :string;
    public gituserDetailAPI :string;
    public authenticateURL :string;

    constructor()
    {
        this.gitUserAPI="https://api.github.com/search/users?q=";
        this.gituserDetailAPI="https://api.github.com/users/";
        this.authenticateURL="http://localhost:1234/getUser/";
    }

}