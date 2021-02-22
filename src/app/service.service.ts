import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  public getA(a:any){
    return this.http.get('http://www.omdbapi.com/?apikey=eb1115f9&s='+a)
  }
  getId(b: any) {
  
    return this.http.get('http://www.omdbapi.com/?apikey=eb1115f9&i='+b)
  }
}
