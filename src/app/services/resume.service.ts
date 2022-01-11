import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private apiURL="http://localhost:3000"


  constructor(private httpResume: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpResume.get(this.apiURL + '/resume/')

  .pipe (
    catchError(this.errorHandler)
  )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
