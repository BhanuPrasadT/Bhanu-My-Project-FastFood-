import { DOCUMENT } from '@angular/common';
import { createInjectableType } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  document:any;
  constructor(@Inject(DOCUMENT) document:Document){this.document=document}
  ngOnInit():void{}
  submit(){
    if(this.document.getElementById('name').value=="bhanu"&&this.document.getElementById('contact').value=="910039"&&this.document.getElementById('email').value=="gopi@mail"&&this.document.getElementById('pincode').value=="1234"&&this.document.getElementById('address').value=="asdf"){
      alert('Your Response has Submitted')
    }else{
      alert('error')
    }
  }
}
