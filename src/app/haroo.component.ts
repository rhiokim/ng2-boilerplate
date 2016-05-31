import { Component } from '@angular/core';
import { PostsComponent } from './+posts';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PhotosComponent } from './+photos';
import { DashboardComponent } from './dashboard';
import { PostComponent } from './+posts/post';

@Component({
  moduleId: module.id,
  selector: 'haroo-app',
  templateUrl: 'haroo.component.html',
  styleUrls: ['haroo.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: DashboardComponent},
  {path: '/posts', component: PostsComponent},
  {path: '/post/:id', component: PostComponent},
  {path: '/photos', component: PhotosComponent}
])
export class HarooAppComponent {
  title = 'haroo works!';
}
