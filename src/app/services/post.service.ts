import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '@app/interfaces/post';
import { catchError, tap } from 'rxjs/operators';

// @Injectable({ providedIn: 'root' })
@Injectable()
export class PostService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://192.168.100.2:3000/posts';
    // this.url = '192.168.100.2:3000/posts';
  }


  getAllPosts(): Observable<Post[]> {
    // console.log(this.http.get<Post[]>(this.url));
    // console.log(this.http.get(this.url));
    return this.http.get<Post[]>(this.url);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('Post service: ' + message);
  }

}
