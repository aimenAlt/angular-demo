import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookHttpService {
  
  baseUrl = "http://localhost:3000/books";

  constructor(private http: HttpClient) { }

  getAllBooksService(): Observable<Book[]>{
    //need to consume the get end point "http://localhost:3000/books"
    // specify the return type as Observable with the generic type
    // also specify the generic type near the get function because we 
        //cannot have different generic types
    return this.http.get<Book[]>(this.baseUrl);
  }

  addBookService(newBook: Book): Observable<Book>{
    return this.http.post<Book>(this.baseUrl, newBook);
  }  

  removeBookService(bookId: number): Observable<Book>{
    return this.http.delete<Book>(this.baseUrl+"/"+bookId);
  }

  getABookService(bookId: number): Observable<Book>{
    return this.http.get<Book>(this.baseUrl+"/"+bookId);
  }

  updateBookService(updateBook: Book): Observable<Book>{
    return this.http.put<Book>(this.baseUrl+"/"+updateBook.id, updateBook);
  }
}
