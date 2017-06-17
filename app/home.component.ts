import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';

@Component({
    templateUrl: 'app/home.component.html',
    providers: [HTTP_PROVIDERS]
})
export class HomeComponent implements OnInit {

    constructor(
        private _routeParams: RouteParams) {
    }
    
    ngOnInit(){
        
    }
}