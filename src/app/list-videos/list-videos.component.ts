import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AppComponent} from '../app.component';
import {YoutubeService} from '../youtube.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-list-videos',
    templateUrl: './list-videos.component.html',
    styleUrls: ['./list-videos.component.scss']
})
export class ListVideosComponent implements OnInit {

    loading = false;
    videos: Array<string> = [];
    nextPage = '';
    data = null;
    @Output() selected = new EventEmitter();
    videoSelected=null;

    constructor(
        private youtubeService: YoutubeService
    ) {
    }

    ngOnInit() {
        this.listVideoByChannel();
    }

    listVideoByChannel() {
        this.loading = true;
        this.youtubeService
            .search(this.nextPage)
            .subscribe(videos => {
                this.loading = false;
                this.data = videos;
                this.nextPage = this.data.nextPageToken;
                for (const item of this.data.items) {
                    this.youtubeService.getById(item.id.videoId)
                        .subscribe(video => {
                            this.videos.push(video);
                            if (!this.videoSelected) {
                                this.selectVideo(video);
                            }
                        });
                }
                console.log(this.videos);
            });
    }

    selectVideo(video) {
        this.videoSelected = video;
        this.selected.emit(video);
    }

}
