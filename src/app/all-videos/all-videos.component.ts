import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {YoutubeService} from '../youtube.service';
import {MatDialog} from '@angular/material';
import {VideoComponent} from '../video/video.component';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-all-videos',
    templateUrl: './all-videos.component.html',
    styleUrls: ['./all-videos.component.scss']
})
export class AllVideosComponent implements OnInit {

    loading = false;
    videos: Array<string> = [];
    nextPage = '';
    data = null;
    query = null;


    constructor(
        private youtubeService: YoutubeService,
        private dialog: MatDialog,
        private route: ActivatedRoute,
    ) {
    }


    ngOnInit() {
        this.route.params.subscribe( (params) => {
            this.query = params['q'];
            this.nextPage = '';
            this.videos = [];
            this.listVideoByChannel();
        });
    }

    listVideoByChannel() {
        this.loading = true;
        this.youtubeService
            .search(this.nextPage, 12, this.query)
            .subscribe(videos => {
                this.loading = false;
                this.data = videos;
                this.nextPage = this.data.nextPageToken;
                for (const item of this.data.items) {
                    this.youtubeService.getById(item.id.videoId)
                        .subscribe(video => {
                            this.videos.push(video);
                        });
                }
            });
    }

    showVideo(video) {
        let modal = this.dialog.open(VideoComponent, {
            height: 'auto',
            width: '700px',
            data: {
                video: video
            }
        });
    }

}
