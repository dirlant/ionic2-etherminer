import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  
  this.movieService.searchMovies(event.target.value).subscribe(
      data => {
          this.movies = data.results; 
          console.log(data);
      },
      err => {
          console.log(err);
      },
      () => console.log('Movie Search Complete')
  );

}
