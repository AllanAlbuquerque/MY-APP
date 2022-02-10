import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected readonly url = `http://localhost:3000/cats`;

  constructor(private http: HttpClient) {}

  getCats() {
    return this.http.get<Array<any>>(`${this.url}`);
  }

  postCats(cat: object) {
    // const params = new HttpParams()
    //   .set(cat)
    return this.http.post<any>(`${this.url}`, cat);
  }
}
