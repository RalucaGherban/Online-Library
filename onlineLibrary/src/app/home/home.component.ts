import { Component } from '@angular/core';
import { BookService } from '../services/book/book.service';
import { Book } from '../shared/models/books';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  books:Book[]=[];
  constructor (private bookService:BookService){}

  ngOnInit(): void{
    this.books=this.bookService.getAll();
    }
}
