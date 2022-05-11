import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public thing: string;

    constructor() {}

    public ngOnInit(): void {
        this.thing = 'blah';
    }
}
