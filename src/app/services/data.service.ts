import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  //metodo que consume los datos en json de typicode
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
    
  }
  getComments(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments');
  }
}
