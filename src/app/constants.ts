import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

    public gitUserAPI :string;
    public gituserDetailAPI :string;

    constructor()
    {
        this.gitUserAPI="https://api.github.com/search/users?q=";
        this.gituserDetailAPI="https://api.github.com/users/";
    }

}