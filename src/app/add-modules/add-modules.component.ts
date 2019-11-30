import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BackendserviceService } from '../service/backendservice.service';

@Component({
  selector: 'app-add-modules',
  templateUrl: './add-modules.component.html',
  styleUrls: ['./add-modules.component.css']
})
export class AddModulesComponent implements OnInit {
dataFile;
vidFile;
addModule: FormGroup;
  constructor(private fb: FormBuilder, private bs: BackendserviceService) { }

  ngOnInit() {
    this.addform();
  }
  addform() {
    this.addModule = this.fb.group({
      'moduleName' : ['', Validators.required],
      'no' : ['', Validators.required],
      'style' : ['', Validators.required]
    });
  }
  onSubmitEvent( event ) {
    if (event.target.files && event.target.files.length > 0) {
      this.dataFile = event.target.files[0];
    }
  }
  video(eve) {
    if (eve.target.files && eve.target.files.length > 0) {
      this.vidFile = eve.target.files[0];
    }
  }
  add() {
// tslint:disable-next-line: prefer-const
    let moduleName = this.addModule.controls['moduleName'].value;
// tslint:disable-next-line: prefer-const
    let no = this.addModule.controls['no'].value;
// tslint:disable-next-line: prefer-const
    let style = this.addModule.controls['style'].value;
// tslint:disable-next-line: prefer-const
    let formData = new FormData();
    formData.append('moduleName', moduleName);
    formData.append('no', no);
    formData.append('style', style);
    formData.append('iconFile', this.dataFile);
    this.bs.addModule(formData).subscribe((res) => {
      console.log(res);
    });
  }
}
