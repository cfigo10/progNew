import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
  }

  getQuery ( query: string ) {
    
    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBDJvVj0oHsDyl1xORu111IielIEIFT-0Aw9zXrSKMkjV5KnrGyqnWKNnS6VEW0nqQAFhpF5E8FVW9ASaA'
    });

    return this.http.get<any>(url, { headers });

  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map(data => data.albums.items));
  }
  

  getArtists( termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(data => {
        return data.artists.items;
    }));
  }

  getArtistById(id:string){
    return this.getQuery(`artists/${id}`)
      .pipe( map(data => {
        return data;
    }));
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map(data => {
        return data.tracks;
    }));
  }

}
