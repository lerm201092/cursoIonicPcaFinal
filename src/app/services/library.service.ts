import { Injectable } from '@angular/core';
import * as booksOffline from "./books.json";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor() { }

  getAuthors() {
    return fetch("https://librarypca.fly.dev/authors").then(
      response => response.json()
    );
  }


getBooksOffline() {
    return booksOffline;
  }

  getBookByAuthor(authorId : any){
    console.log("Autor Id : " + authorId);
    return fetch(`https://librarypca.fly.dev/books_authors?author_id=${authorId}`).then(
      books  => books.json()
    );
  }

}
