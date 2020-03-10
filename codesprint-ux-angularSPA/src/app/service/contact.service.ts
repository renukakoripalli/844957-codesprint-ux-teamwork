import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../Model/contact';
import { Observable } from 'rxjs';

export const url="http://localhost:3000/contact";
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }
  addcontact(details:Contact):Observable<any>{
    return this.http.post<any>(url,details);
  }
  getContact():Observable<any>{
    return this.http.get("url");
  }
}
