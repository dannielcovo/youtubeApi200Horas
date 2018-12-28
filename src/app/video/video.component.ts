import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {formatNumber} from '@angular/common';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

    seeMore = false;
    @Input() video;

    constructor(@Optional() @Inject(MAT_DIALOG_DATA) public data) {
        if (data && data.video) {
            this.video = data.video;
            console.log(this.video.snippet.publishedAt);
        }
    }

    ngOnInit() {
    }

}
