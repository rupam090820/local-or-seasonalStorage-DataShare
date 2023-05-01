import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  public name:string='';
  public email:any='';
  public Number:any='';
  public Lname:any='';
  public Semail:any;
  public SM:any;
constructor(private activatedroute:ActivatedRoute){
  this.activatedroute.queryParams.subscribe((item:any)=>{
    console.log(item);
    this.name=item.N;
    this.email=item.E;
    this.Number=item.Nu;
    this.Lname=localStorage.getItem('NAME');
    console.log(this.Lname);
    localStorage.removeItem('NAME');
   this.Semail= sessionStorage.getItem('EMAIL');
    this.SM= sessionStorage.getItem('MOBILE');
   
  })
}
}
