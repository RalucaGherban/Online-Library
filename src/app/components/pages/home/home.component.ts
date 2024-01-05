import { Component, OnInit } from '@angular/core';
import { Book } from '../../../shared/models/book';
import { BookService } from '../../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    books:Book[]=[];

    constructor(private bookService:BookService, activatedRoute:ActivatedRoute){
      activatedRoute.params.subscribe((params)=>{
        if(params.searchTerm)
         this.books=this.bookService.getAllBooksBySearch(params.searchTerm);
        else if(params.tag)
        this.books= this.bookService.getAllBopksByTag(params.tag);
        else
          this.books= bookService.getAll();
      })
      this.books = bookService.getAll();
    }

    ngOnInit(): void {
        
    }
}
