import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailsComponent implements OnInit {

  public movie = null;

  constructor(
    public location: Location,
    private router: ActivatedRoute,
    public movieService: MovieService
    ) { }

  ngOnInit() {
    this.router.params.subscribe(routeParams =>{
      this.getMovieDetail(routeParams.movie);
    });
  }

  public getMovieDetail (movieId: string) {
    this.movieService.getMovieById(movieId)
      .pipe(
        take(1)
      )
      .subscribe( res => {
        this.movie= res;
        console.log(this.movie);
        },
        err => {
          console.log(err);
        },
        () => {
          //petición finalizada
        }
      );
  }

}
