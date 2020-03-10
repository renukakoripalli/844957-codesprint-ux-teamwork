import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Giftcard } from '../Model/giftcard';
import { GiftcardService } from '../service/giftcard.service';
@Component({
  selector: 'app-placegiftcard',
  templateUrl: './placegiftcard.component.html',
  styleUrls: ['./placegiftcard.component.css']
})
export class PlacegiftcardComponent implements OnInit {
  placegift: FormGroup;
  submitted:boolean;
  gift:Giftcard;
  constructor(private formBuilder:FormBuilder,private service:GiftcardService) { }

  ngOnInit() {
    this.placegift = this.formBuilder.group({
      inr: ['',[Validators.required,Validators.pattern('^[0-9]{1,8}$')]],
      paisa:['',[Validators.required,Validators.pattern('^[0-99]{1,2}$')]],
      fn:['',[Validators.required,Validators.pattern('^[a-z A-Z]{5,20}$')]],
      ln:['',[Validators.required,Validators.pattern('^[a-z A-Z]{5,20}$')]],
      sa:['',[Validators.required,Validators.pattern('^[a-z A-Z0-9-:]{3,30}$')]],
      city:['',[Validators.required,Validators.pattern('^[a-zA-Z]{3,30}$')]],
      state:['',[Validators.required,Validators.pattern('^[a-z A-Z]{3,30}$')]],
      pn:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      bfn:['',[Validators.required,Validators.pattern('^[a-z A-Z]{5,20}$')]],
      bln:['',[Validators.required,Validators.pattern('^[a-z A-Z]{5,20}$')]],
      emailid: ['', [Validators.required,Validators.email]],
      country:['',[Validators.required]],
       mobileno:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      
      
  });
}
get f() { return this.placegift.controls; }
OnSubmit(){
this.submitted=true;
if(this.placegift.valid){
  this.gift=new Giftcard();
  this.gift.sno='S'+Math.round(Math.random()*1000);
  this.gift.amount=this.placegift.value["inr"]+this.placegift.value["paisa"];
  
 
  this.gift.streetAddress=this.placegift.value["sa"];
  this.gift.city=this.placegift.value["city"];
 
  this.gift.buyerName=this.placegift.value["bfn"];
  this.gift.buyerLastName=this.placegift.value["bln"];
  this.gift.mobile=(this.placegift.value["mobileno"]);
  
  console.log(this.gift);
  this.service.saveOrder(this.gift).subscribe(res=>{
    this.gift=res;
    alert("Order placed");
    
  })
  alert("added")
}
  else 
alert("please fill the details in the form")

}




}
