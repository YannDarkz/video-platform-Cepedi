import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { LikeVideosComponent } from './pages/like-videos/like-videos.component';
import { HomeComponent } from './pages/home/home.component';
import { SeeLaterComponent } from './pages/see-later/see-later.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth/auth.guard';
import { SingleVideoComponent } from './pages/single-video/single-video.component';
import { AllVideosComponent } from './pages/all-videos/all-videos.component';



export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    { path: 'like-videos', component: LikeVideosComponent, canActivate: [authGuard] },
    { path: 'see-later', component: SeeLaterComponent, canActivate: [authGuard] },
    { path: 'favorites', component: FavoritesComponent, canActivate: [authGuard] },
    { path: 'videos', component: AllVideosComponent, canActivate: [authGuard] },
    { path: 'videos/:id', component: SingleVideoComponent, canActivate: [authGuard] },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }