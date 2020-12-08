import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  sid:number;
  addForm:FormGroup;
  constructor(private formbuilder:FormBuilder,
              private service:StudentsService,
              private router:Router,
              private Actv:ActivatedRoute) { }

   ngOnInit() {
    this.addForm=this.formbuilder.group({
      sid:[],
      fname:['',[Validators.required,Validators.maxLength(10)]],
      lname:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.maxLength(20)]]
    });
    this.service.upById(this.Actv.snapshot.params.id).subscribe(data=>{
      this.addForm.patchValue(data);
      console.log(data);
    }); 
}

Edit(){
  this.service.edit(this.addForm.value).subscribe(data=>{
    this.router.navigate(['view']);
  });
}

}
