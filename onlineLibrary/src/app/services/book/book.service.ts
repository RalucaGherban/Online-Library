import { Injectable } from '@angular/core';
import { Book } from '../../shared/models/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getAllBopksByTag(tag: any): import("../../../../../src/app/shared/models/book").Book[] {
    throw new Error('Method not implemented.');
  }
  getAllBooksBySearch(searchTerm: any): import("../../../../../src/app/shared/models/book").Book[] {
    throw new Error('Method not implemented.');
  }
  getBookById(id: any): import("../../../../../src/app/shared/models/book").Book {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getAll():Book[]{
    return[
      {
        id:1,
        name:'The book thief',
        author:'Markus Zusak',
        period:14,
        favourite:false,
        stars:4.5,
        imageUrl:'/assets/images/bookThief.jpg',
        type:'Fiction',
      },
      {
        id:2,
        name:'The Diary of a Young Girl',
        author:'Anne Frank',
        period:14,
        favourite:false,
        stars:4,
        imageUrl:'/assets/images/diary.jpg',
        type:'Memorii',
      },
      {
        id:3,
        name:'War and Peace',
        author:'Lev Tolstoi',
        period:24,
        favourite:true,
        stars:5,
        imageUrl:'/assets/images/warPeace.jpeg',
        type:'Fiction',
      },
      {
        id:4,
        name:'Les Miserables',
        author:'Victor Hugo',
        period:10,
        favourite:false,
        stars:4,
        imageUrl:'/assets/images/lesm.jpg',
        type:'Fiction',
      },
      {
        id:5,
        name:'The Prince and the Pauper',
        author:'Mark Twain',
        period:21,
        favourite:true,
        stars:4.5,
        imageUrl:'/assets/images/twain.jpg',
        type:'Fiction',
      },
      {
        id:6,
        name:'Harry Potter and the Philosopher Stone',
        author:'J. K. Rowling',
        period:20,
        favourite:true,
        stars:5,
        imageUrl:'/assets/images/harry1.jpg',
        type:'Fiction',
      }
    ]
  }
}
