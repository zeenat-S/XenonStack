import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "https://mailthis.to/time";

  constructor(private http: HttpClient) { }

  PostMessage(input:any){
    return this.http.post(this.url, input, {responseType:'text'}).pipe(
      map(
        (response) => {
          if(response){
            return response;
          }
          return 0;
        }
      )
    );
  }
}
