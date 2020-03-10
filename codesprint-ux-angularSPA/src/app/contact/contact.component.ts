import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
Contactform:FormGroup
submitted:boolean;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.Contactform=this.formbuilder.group({
    name:['',[Validators.required,Validators.pattern('^[a-z A-Z]{3,20}$')]],
    mobile:['',[Validators.required,Validators.pattern('^[6-9][0-9]{9}$')]],
    email:['',[Validators.required,Validators.email]],
    comment:['',[Validators.required,Validators.pattern('^[a-zA-Z 0-9~!@#$%^&*()]{3,80}$')]]

  })
}
  get f(){
    return this.Contactform.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.Contactform.valid)
    {
      alert("thank you ");
    }
    else 
    alert("please fill he details");
}
}
