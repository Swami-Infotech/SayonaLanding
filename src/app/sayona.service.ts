import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SayonaService {

  constructor(private http :HttpClient) { }


  GetAllData(){
    return this.http.get("https://pagesapi.swamiinfotech.in/Web/GetPageData/7");
  }

}
