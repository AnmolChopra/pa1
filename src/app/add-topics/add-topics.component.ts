import { Component, OnInit } from '@angular/core';
import { BackendserviceService } from '../service/backendservice.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css']
})
export class AddTopicsComponent implements OnInit {
moduleData;
Addtopic: FormGroup;
downForm = false;
resObj;
resStat;
vidFile;
vidRes;
newV = false;
old = false;
ppt = false;
doc = false;
mcq = false;
videoF = false;
  constructor(private bs: BackendserviceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.fetchMOdule();
    this.addForm();
  }
  fetchMOdule() {
    this.bs.fetchModule().subscribe((res) => {
      this.moduleData = res;
    });
  }
  trueEvent(value) {
// tslint:disable-next-line: prefer-const
    let moduleName = value;
    this.bs.fetchIntro(moduleName).subscribe((res) => {
       this.resObj = res;
       this.resStat = this.resObj.stat;
    }),
    this.downForm = true;
  }
  addForm() {
    this.Addtopic = this.fb.group({
      'moduleName' : ['', Validators.required],
      'stat' : ['true'],
      'topicName' : ['', Validators.required],
      'topicType' : ['', Validators.required],
      'topicNo' : ['', Validators.required],
      MCQ : this.fb.array([
        this.addMCQForm()
      ])
    });
  }
  addMCQForm() {
    return this.fb.group({
      'no': [''],
      'ques': [''],
      'option1': [''],
      'option2': [''],
      'option3': [''],
      'option4': [''],
      'correctOption': ['']
    });
  }
  addMcq() {
    (<FormArray>this.Addtopic.get('MCQ')).push(this.addMCQForm());
  }
  removeMcq(groupIndex) {
    (<FormArray>this.Addtopic.get('MCQ')).removeAt(groupIndex);
  }
  video(eve) {
    if (eve.target.files && eve.target.files.length > 0) {
      this.vidFile = eve.target.files[0];
    }
// tslint:disable-next-line: prefer-const
    let stat = this.Addtopic.controls['stat'].value;
// tslint:disable-next-line: prefer-const
    let moduleName = this.Addtopic.controls['moduleName'].value;
// tslint:disable-next-line: prefer-const
    let formData = new FormData;
    formData.append('stat', stat);
    formData.append('moduleName', moduleName);
    formData.append('introVid', this.vidFile);
    this.bs.addIntro(formData).subscribe((res) => {
      console.log(res);
      this.vidRes = res;
// tslint:disable-next-line: triple-equals
      if (this.vidRes.err == 0) {
        console.log('0');
      }
    });
  }
  valueType(val) {
// tslint:disable-next-line: prefer-const
    let vaalue = val;
// tslint:disable-next-line: triple-equals
    if (vaalue == 'new') {
      this.newV = true;
      this.old = false;
    } else {
      this.newV = false;
      this.old = true;
    }
  }
  topicType(lal) {
// tslint:disable-next-line: prefer-const
    let vaalue = lal;
// tslint:disable-next-line: triple-equals
    if (vaalue == 'ppt') {
      this.ppt = true;
      this.doc = false;
      this.mcq = false;
      this.videoF = false;
// tslint:disable-next-line: triple-equals
    } else if (vaalue == 'doc') {
      this.ppt = false;
      this.doc = true;
      this.mcq = false;
      this.videoF = false;
// tslint:disable-next-line: triple-equals
    } else if (vaalue == 'mcq') {
      this.ppt = false;
      this.doc = false;
      this.mcq = true;
      this.videoF = false;
    } else {
      this.ppt = false;
      this.doc = false;
      this.mcq = false;
      this.videoF = true;
    }
  }
}
