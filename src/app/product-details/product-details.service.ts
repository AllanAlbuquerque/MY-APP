import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  protected readonly cat = `http://localhost:3000/cats`
  
  constructor(private http: HttpClient) { }

  cats() {
    return this.http.get(this.cat)
  }
}
