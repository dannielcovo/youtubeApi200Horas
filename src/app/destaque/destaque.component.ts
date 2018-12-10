import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destaque',
  templateUrl: './destaque.component.html',
  styleUrls: ['./destaque.component.scss']
})
export class DestaqueComponent implements OnInit {

    video = null;

    constructor() { }

    ngOnInit(): void {
    }

    onSelected(video) {
        this.video = null;
        setTimeout(() => {
            this.video = video;
        }, 300);
    }
}
