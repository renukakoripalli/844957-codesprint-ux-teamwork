import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Giftcard } from '../Model/giftcard';
@Injectable({
  providedIn: 'root'
})
export class GiftcardService {
httpUrl:string='http://localhost:3000/giftcard';
  constructor(private http:HttpClient) { }
 public saveOrder(giftOrder:Giftcard):Observable<Giftcard>{
    return this.http.post<Giftcard>(this.httpUrl,giftOrder);
  }
  public view():Observable<any>{
    return this.http.get<any>(this.httpUrl);
  }
}
