import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListVideosComponent } from './list-videos/list-videos.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { Nl2brPipe } from './nl2br.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormatDataPipe } from './format-data.pipe';
import { AllVideosComponent } from './all-videos/all-videos.component';
import {MatButtonModule} from '@angular/material/button';
import { DestaqueComponent } from './destaque/destaque.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material';
import { VideoComponent } from './video/video.component';
import { CommonModule } from '@angular/common';
import { NumberPipe } from './number.pipe';


@NgModule({
    declarations: [
        AppComponent,
        Nl2brPipe,
        ListVideosComponent,
        FormatDataPipe,
        AllVideosComponent,
        DestaqueComponent,
        VideoComponent,
        NumberPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatCardModule,
        FormsModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        CommonModule
    ],
    providers: [],
    entryComponents: [
        VideoComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
