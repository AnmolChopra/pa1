import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendserviceService } from '../service/backendservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup;
resData;
resObj;
errMsg;
cid;
  constructor(private fb: FormBuilder,private router:Router, private op: BackendserviceService) { }

  ngOnInit() {
    this.loginForm();
  }
  loginForm(){
    this.login = this.fb.group({
      'username' : [''],
      'password' : ['']
    })
  }
  teachlogin(){
    var formData = this.login.getRawValue();
    var seriliz = formData;
    this.resData = this.op.techlog(seriliz).subscribe((res)=>{
      this.resObj=res;
    if(this.resObj.err ==0  && this.resObj.data.change_pass == true){
      localStorage.setItem('username',this.resObj.username);
      this.router.navigate(['/Curriculum']);
    }
    else if(this.resObj.data.change_pass == false && this.resObj.err ==0  ){
      localStorage.setItem('username',this.resObj.username);
      this.router.navigate(['/Curriculum'])
    }
    else{
    this.errMsg=this.resObj.msg;
    }
      console.log(this.resObj.data._id);
    })
  }
}
