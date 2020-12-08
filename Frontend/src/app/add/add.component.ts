import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm:FormGroup;
  constructor(private formbuilder:FormBuilder,
              private service:StudentsService,
              private router:Router) { }

  ngOnInit() {
    this.addForm=this.formbuilder.group({
      fname:['',[Validators.required,Validators.maxLength(10)]],
      lname:['',[Validators.required,Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.maxLength(20)]]

    });
  }
  onSubmit(){
    this.service.create(this.addForm.value).subscribe(data =>{
      alert("Data Added Successfully!!");
      this.router.navigate(['view']);
    });
  }

}
