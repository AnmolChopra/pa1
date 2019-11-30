import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  constructor(private rout: Router) { }

  ngOnInit() {
  }
  module1(){
    this.rout.navigate(['./module-1'])
  }
}
