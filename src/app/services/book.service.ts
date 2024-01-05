import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { sample_books, sample_tags } from '../../data';
import { tag } from '../shared/models/tag';
// import { Book } from '../shared/models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAll():Book[]{
    return sample_books;
  }

  getAllBooksBySearch(searchTerm:string){
    return this.getAll().filter(book => book.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():tag[]{
    return sample_tags;
  }
  
  getAllBopksByTag(tag:string):Book[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(book => book.type?.includes(tag));
  }

}
