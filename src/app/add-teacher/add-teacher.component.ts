import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BackendserviceService } from '../service/backendservice.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  addtech:FormGroup;
  resData;
  resObj;
  constructor(private fb: FormBuilder,private bs: BackendserviceService) { }

  ngOnInit() {
    this.addF();
  }
  addF(){
    this.addtech= this.fb.group({
    'username':['',Validators.required],
    'email':['',Validators.required]
    })
    }
    addt(){
      var formData = this.addtech.getRawValue();
      var seriliz = formData;
      this.resData= this.bs.addteach(seriliz).subscribe((res)=>{
        this.resObj=res;
        console.log(this.resObj)
      })
    }
}
