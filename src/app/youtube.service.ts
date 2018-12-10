import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

const API_URL = 'https://www.googleapis.com/youtube/v3/';
const API_KEY = 'AIzaSyBWReMSzRmTuCw_puw0bvAEDArIXo11Ivc';
const channelID = 'UC5Onm-oiEqxyMu0WI8RdetA';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {

    constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    }

    getApiUrl(resource) {
        return API_URL + `${resource}?key=${API_KEY}&`;
    }

    search(nextPage, maxResults = 10, query = null, order = 'relevance') {
        const part = 'snippet';
        let url = this.getApiUrl('search') + `part=${part}&channelId=${channelID}&maxResults=${maxResults}&order=${order}&type=video&pageToken=${nextPage}`;
        if (query) {
            url += `&q=${query}`;
        }
        return this.http
            .get(url);
    }

    getById(id) {
        const part = 'player,snippet,contentDetails,statistics,recordingDetails';
        return this.http
            .get(
                this.getApiUrl('videos') + `part=${part}&id=${id}`
            )
            .pipe( map((values: any) => {
                if (values.items.length > 0) {
                    let video = values.items[0];
                    video.urlPlayer = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.id);
                    return video;
                }
                return null;
            }));
    }
    getVideosChannel() {
        const part = 'snippet,contentDetails,statistics';
        return this.http
            .get(
                this.getApiUrl('channels') + `id=${channelID}&part=${part}&order=date&maxResults=10`
            )
            .pipe( map((values: any) => {
                if (values.items.length > 0) {
                    return values.items[0];
                }
                return null;
            }));
    }
}
