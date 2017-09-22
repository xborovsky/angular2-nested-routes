import { Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { SongsComponent } from './songs/songs.component';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';

export const routes:Routes = [
    { path : '', redirectTo: 'home', pathMatch : 'full' },
    { path : 'home', component : HomeComponent },
    { path : 'artist', component : ArtistComponent, children : [
            { path : '', redirectTo : 'songs', pathMatch : 'full' },
            { path : 'songs', component : SongsComponent },
            { path : 'albums', component : AlbumsComponent }
        ]
    }
];
