import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public myForm:any=[];
  constructor(public frombuilder:FormBuilder,public activatedroute:ActivatedRoute,public router:Router){
    this.myForm=this.frombuilder.group({
      'name':['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      'email':['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      'number':[,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      'acceptTerms': [, [Validators.requiredTrue]]
          })
  }

public get name(){
  return this.myForm.get('name') as FormControl;
}
public get email(){
  return this.myForm.get('email') as FormControl;
}
public get number(){
  return this.myForm.get('number') as FormControl;
}
public get acceptTerms(){
  return this.myForm.get('acceptTerms') as FormControl;
}
public Name:string='';
public Email:any='';
public Number:any='';
//for submit button
send(){
   console.log(this.myForm.value);
 this.Name=this.myForm.value.name;
 this.Email=this.myForm.value.email;
 this.Number=this.myForm.value.number;
 
 // Another Process send data between unrelated component
 localStorage.setItem('NAME',this.myForm.value.name);
 sessionStorage.setItem('EMAIL',this.myForm.value.email);
 sessionStorage.setItem('MOBILE',this.myForm.value.number);

  this.router.navigate(['/show'],{queryParams:{N:this.Name,E:this.Email,Nu:this.Number}});
}
}
