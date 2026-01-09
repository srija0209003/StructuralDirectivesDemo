import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {

  //INPUT
  movies:Movie[]=[
    {movieid:1,moviename: "Avengers",price:400},
     {movieid:2,moviename: "Godfather",price:450},
      {movieid:3,moviename: "Miracle",price:500},
  ];
  
  bookedMovies:Movie[]=[];

  bookTicket(movie:Movie){
    this.bookedMovies.push(movie);
  }
}
