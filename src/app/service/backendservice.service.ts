import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {
url = 'http://localhost:1235/';
  constructor(private http: HttpClient) { }

  //   Add Module
  addModule(data) {
    return this.http.post(this.url + 'addModule', data);
  }
  //    Fetch module
  fetchModule() {
    return this.http.get(this.url + 'fetchModule');
  }
  //    Fetch video
  fetchIntro(moduleName) {
    return this.http.get(this.url + 'fetchIntro/' + moduleName);
  }
  //   Add Videos
  addIntro(data) {
    return this.http.post(this.url + 'addIntro', data);
  }
  // add teach
  addteach(data) {
    return this.http.post(this.url + 'addteach', data);
  }
  // tech
  techlog(data) {
    return this.http.post(this.url + 'techlog', data);
  }
  // find  module 1 stat
  findMod1(teacherN) {
    return this.http.get(this.url + 'findMod1/' + teacherN);
  }
  // update module
  introTime(data) {
    return this.http.post(this.url + 'introTime', data);
  }
  // update ppt slide module 1
  updatePPtmod1(data){
    return this.http.post(this.url + 'updatepptmod1', data);
  }
}
