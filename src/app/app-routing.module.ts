import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllVideosComponent} from './all-videos/all-videos.component';
import {DestaqueComponent} from './destaque/destaque.component';


const routes: Routes = [
    {path: '', component: DestaqueComponent},
    {path: 'videos', component: AllVideosComponent},
    {path: 'query/:q', component: AllVideosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
