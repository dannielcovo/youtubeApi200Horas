import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './youtube.service';
import { DomSanitizer } from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    query;
    visible = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    search() {
        if (this.query) {
            this.router.navigate(['/query/' + this.query]);
        }
    }

}