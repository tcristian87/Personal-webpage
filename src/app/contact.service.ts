import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private mailApi = '59f42d92da394378cec84c0453ccbee9'


  constructor(private http: HttpClient) { }
  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: 'text' })
       .pipe(
        map(
          (response) => {
            if (response) {
              return response;
            }else{
              return null;
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }

}
