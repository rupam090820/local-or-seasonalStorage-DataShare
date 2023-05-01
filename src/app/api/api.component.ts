import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
constructor(private api:ApiService){
}
public loading:boolean=false;
public categories:any=[];
public link:any=[];
ngOnInit(){
  
  this.loading=true;
  this.api.getApi().subscribe((item:any)=>{
    this.loading=false;
    console.log(item);
    this.categories=item.categories;
    //console.log(this.categories);
    this.link=item['_links'];
   // console.log(this.link);
  })
}
// populatetodo(){
//   this.loading=true;
//   this.api.getApi().subscribe((item:any)=>{
//     this.loading=false;
//     console.log(item);
//     this.categories=item.categories;
//     //console.log(this.categories);
//     this.link=item['_links'];
//    // console.log(this.link);
//   })
// }
}
