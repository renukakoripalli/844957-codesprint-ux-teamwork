import { Component, OnInit } from '@angular/core';
import { Orderpage } from '../Model/orderpage';
import { GiftcardService } from '../service/giftcard.service';

@Component({
  selector: 'app-vieworderpage',
  templateUrl: './vieworderpage.component.html',
  styleUrls: ['./vieworderpage.component.css']
})
export class VieworderpageComponent implements OnInit {
  item:Orderpage;
  sno:number;
  buyername:string;
  shippingaddress:string;
    city:string;
    amount:number;
    phone:number;
   
  list:Orderpage[]=[];
  constructor(private service:GiftcardService) {
    this.service.view().subscribe(res=>{
      this.list=res;
      console.log(this.list)
    })
   }

  ngOnInit() {
  }
 
}
