import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  items:Students[];
  temp;
  constructor(private service:StudentsService,
              private router:Router) { }

  ngOnInit() {
    this.service.getData().subscribe(data =>{this.items=data;console.log(this.items)});
  }
  delete(item:Students):void{
    this.service.delete(item.sid)
    .subscribe();
    window.open("http://localhost:4200",'_self');
  }
  edit(item:Students){
    this.temp=item.sid;
    this.router.navigate(['edit/'+this.temp]);
  }

}
