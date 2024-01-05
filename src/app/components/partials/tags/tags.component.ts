import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { tag } from '../../../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  tags?:tag[];
  constructor(bookService:BookService){
    this.tags=bookService.getAllTags();
  }
  ngOnInit(): void {
      
  }
}
