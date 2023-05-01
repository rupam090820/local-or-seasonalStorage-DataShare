import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getApi(){
    return this.http.get('https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/');
  }
}
