import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-ticket',
  standalone: false,
  templateUrl: './movie-ticket.html',
  styleUrl: './movie-ticket.css',
})
export class MovieTicket {
  @Input() movie!:Movie;
  @Output() book=new EventEmitter<Movie>()

  bookTicket( ){
    this.book.emit(this.movie)
  }
}
