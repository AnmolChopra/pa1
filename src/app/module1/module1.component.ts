import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BackendserviceService } from '../service/backendservice.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {} from 'ng-simple-slideshow';
import { from } from 'rxjs';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component implements OnInit {
  welSec:boolean=true;
  pptSec:boolean=false;
  VedioSec:boolean=false;
  textSec:boolean=false;
  mcqSec:boolean=false;
  assSec:boolean=false;
  introRes;
  pptRes;
  vedioRes;
  textRes;
  mcqRes;
  assRes;
  welText:boolean=false;
  ppt:boolean=false;
  pptprogress:boolean=false;
  disabledValue:boolean=false;
  ppterr;
  videotext:boolean=false;
  peaceprogress:boolean=false;
  peaceword:boolean=false;
  paecewordprogress:boolean=false;
  mcq:boolean=false;
  mcqprog:boolean=false;
  mcqf:boolean=false;
  mcqff:boolean=false;
  mcqf1:boolean=false;
  mcqff1:boolean=false;
  mcqf2:boolean=false;
  mcqff2:boolean=false;
  mcqf3:boolean=false;
  mcqff3:boolean=false;
  mcqf4:boolean=false;
  mcqff4:boolean=false;
  mcqf5:boolean=false;
  mcqff5:boolean=false;
  mcqf6:boolean=false;
  mcqff6:boolean=false;
  mcqf7:boolean=false;
  mcqff7:boolean=false;
  mcqf8:boolean=false;
  mcqff8:boolean=false;
  resData;
  ModuleName;
  @ViewChild('videoPlayer') videoPlayer: ElementRef;
  paly:boolean=false;
  pause:boolean=true;
  currentTime;
  introVidGrp:FormGroup;
  userName;
  imageUrl: Array<any> = [];
  ii:number = 0;
  slideRes;
  slideF:FormGroup;
  constructor(private bs: BackendserviceService, private fb: FormBuilder, private elem: ElementRef) {  
    this.imageUrl = [
     "assets/slide1.PNG",
      "assets/slide2.PNG",
      "assets/slide3.PNG"
    ]
    this.modulestat();
    
  }

  ngOnInit() {
    // this.redirect();
    this.ModuleName = 'Module1';
    this.userName = localStorage.getItem('username');
    
  }
  modulestat() {
    var teacherName = localStorage.getItem('username');
    this.bs.findMod1(teacherName).subscribe((res) => {
      this.resData = res;
      console.log(this.resData);
      this.introRes = this.resData.introVid
      this.pptRes = this.resData.Pttstat
      this.vedioRes = this.resData.eduVid
      this.textRes = this.resData.eduWord
      this.mcqRes = this.resData.mcq
      this.assRes = this.resData.ass
      this.slideRes = this.resData.PPtslide
    });
  }
  // redirect(){
  //   if(this.introRes === false){
  //     this.welSec =true;
  //     this.pptSec =false;
  //     this.VedioSec =false;
  //     this.textSec =false;
  //     this.mcqSec =false;
  //     this.assSec =false;
  //     console.log('1')
  //   }
  //     if(this.introRes = true){
  //     this.welSec =false;
  //     this.pptSec =true;
  //     this.VedioSec =false;
  //     this.textSec =false;
  //     this.mcqSec =false;
  //     this.assSec =false;
  //     console.log('2')
  //   }
  //    if(this.pptRes = true){
  //     this.welSec =false;
  //     this.pptSec =false;
  //     this.VedioSec =true;
  //     this.textSec =false;
  //     this.mcqSec =false;
  //     this.assSec =false;
  //     console.log('3')
  //   }
  //    if(this.vedioRes = true){
  //     this.welSec =false;
  //     this.pptSec =false;
  //     this.VedioSec =false;
  //     this.textSec =true;
  //     this.mcqSec =false;
  //     this.assSec =false;
  //     console.log('4')
  //   }
  //    if(this.textRes = true){
  //     this.welSec =false;
  //     this.pptSec =false;
  //     this.VedioSec =false;
  //     this.textSec =false;
  //     this.mcqSec =true;
  //     this.assSec =false;
  //     console.log('5')
  //   }
  //    if(this.mcqRes = true){
  //     this.welSec =false;
  //     this.pptSec =false;
  //     this.VedioSec =false;
  //     this.textSec =false;
  //     this.mcqSec =false;
  //     this.assSec =true;
  //     console.log('6')
  //   }
  // }
  next(){
    if(this.welSec == true){
      this.welSec =false;
      this.pptSec =true;
      this.VedioSec =false;
      this.textSec =false;
      this.mcqSec =false;
      this.assSec =false;
    } 
    else if(this.pptSec == true){
      this.welSec =false;
      this.pptSec =false;
      this.VedioSec =true;
      this.textSec =false;
      this.mcqSec =false;
      this.assSec =false;
    }
    else if(this.VedioSec == true){
      this.welSec =false;
      this.pptSec =false;
      this.VedioSec =false;
      this.textSec =true;
      this.mcqSec =false;
      this.assSec =false;
    }
    else if(this.textSec == true){
      this.welSec =false;
      this.pptSec =false;
      this.VedioSec =false;
      this.textSec =false;
      this.mcqSec =true;
      this.assSec =false;
    }
    else if(this.mcqSec == true){
      this.welSec =false;
      this.pptSec =false;
      this.VedioSec =false;
      this.textSec =false;
      this.mcqSec =false;
      this.assSec =true;
    }
  }
  prev(){
    if(this.pptSec == true){
      this.welSec =true;
      this.pptSec =false;
      this.VedioSec =false;
      this.textSec =false;
      this.mcqSec =false;
      this.assSec =false;
    }
    else if(this.VedioSec == true){
      this.welSec =false;
      this.pptSec =true;
      this.VedioSec =false;
      this.textSec =false;
      this.mcqSec =false;
      this.assSec =false;
    }
    else if(this.textSec == true){
      this.welSec =false;
      this.pptSec =false;
      this.VedioSec =true;
      this.textSec =false;
      this.mcqSec =false;
      this.assSec =false;
    }
    else if(this.mcqSec == true){
      this.welSec =false;
      this.pptSec =false;
      this.VedioSec =false;
      this.textSec =true;
      this.mcqSec =false;
      this.assSec =false;
    }
    else if(this.assSec == true){
      this.welSec =false;
      this.pptSec =false;
      this.VedioSec =false;
      this.textSec =false;
      this.mcqSec =true;
      this.assSec =false;
    }
  }
  slide(i){
    this.modulestat();
    i+=this.slideRes ;
    this.bs.updatePPtmod1(this.userName).subscribe((res)=>{
      console.log(res)
    })
  }
  
  play(event: any){
    if(this.paly == false){
      this.paly = true;
      this.pause = false;
      this.videoPlayer.nativeElement.play();
      if(this.resData.introVidTime >= "91"){
        this.videoPlayer.nativeElement.currentTime = "0";
      }
      else{
        this.videoPlayer.nativeElement.currentTime = this.resData.introVidTime;
      }
    }
    else if(this.pause == false){
      this.paly = false;
      this.pause  = true;
      this.videoPlayer.nativeElement.pause();
    }
  }
  introVid(){
    this.introVidGrp = this.fb.group({
      'userName' : this.userName,
      'time' : this.currentTime
    })
  }
  setCurrentTime(data) {
    this.introVid();
    this.currentTime = data.target.currentTime;
    var formData = this.introVidGrp.getRawValue();
    var serilize = formData
    this.bs.introTime(serilize).subscribe((res)=>{
      this.introRes = res;
      this.modulestat();
    })   
 }
  weltext(){
    this.pptprogress = true;
    if(this.welText==false){
      this.welText = true;
    }
    else{
      this.welText = false;
    }
  }
  PPT(){
    this.peaceprogress =   false;
    this.welSec= false;
    this.pptSec = true;
  }
  video2(){
    this.pptSec = false;
    this.VedioSec =true;
  }
  videoText(){
    if(this.videotext == false){
      this.videotext = true;
    }
    else{
      this.videotext = false;
    }
  }
  peacet(){
    this.paecewordprogress = true;
    if(this.peaceprogress == false){
      
    }
  }
  PeaceWord(){
    this.mcqprog =true;
    if(this.paecewordprogress == true){
      if(this.peaceword == false){
        this.peaceword  = true;
      }
      else{
        this.peaceword = false;
      }
    }
  }
  MCQ(){
    if(this.mcqprog == true){
      if(this.mcq == false){
        this.mcq = true;
      }
      else{
        this.mcq = false;
      }
    }
  }
  ans1(event){
    let val = event;
    console.log(val);
    this.disabledValue=true;
    if(val == 'soul'){
      this.mcqff = true;
      this.mcqf =true;
    }
    else{
      this.mcqff = true;
      this.mcqf = false;
    }
  }
  ans2(event){
    let val = event;
    console.log(val);
    if(val == 'Invert the attention to go within'){
      this.mcqff1 = true;
      this.mcqf1 =true;
    }
    else{
      this.mcqff1 = true;
      this.mcqf1 = false;
    }
  }
  ans3(event){
    let val = event;
    console.log(val);
    if(val == 'At an early age'){
      this.mcqff2 = true;
      this.mcqf2 =true;
    }
    else{
      this.mcqff2 = true;
      this.mcqf2 = false;
    }
  }
  ans4(event){
    let val = event;
    console.log(val);
    if(val == 'Spiritual development'){
      this.mcqff3 = true;
      this.mcqf3 =true;
    }
    else{
      this.mcqff3 = true;
      this.mcqf3 = false;
    }
  }
  ans5(event){
    let val = event;
    console.log(val);
    if(val == 'Everyone'){
      this.mcqff4 = true;
      this.mcqf4 =true;
    }
    else{
      this.mcqff4 = true;
      this.mcqf4 = false;
    }
  }
  ans6(event){
    let val = event;
    console.log(val);
    if(val == 'Concentration'){
      this.mcqff5 = true;
      this.mcqf5 =true;
    }
    else{
      this.mcqff5 = true;
      this.mcqf5 = false;
    }
  }
  ans7(event){
    let val = event;
    console.log(val);
    if(val == 'Busting stress and making us relaxed'){
      this.mcqff6 = true;
      this.mcqf6 =true;
    }
    else{
      this.mcqff6 = true;
      this.mcqf6 = false;
    }
  }
  ans8(event){
    let val = event;
    console.log(val);
    if(val == 'A better human being who can deal with the problems of life.'){
      this.mcqff7 = true;
      this.mcqf7 =true;
    }
    else{
      this.mcqff7 = true;
      this.mcqf7 = false;
    }
  }
  ans9(event){
    let val = event;
    console.log(val);
    if(val == 'Good decisions that will be beneficial for everyone'){
      this.mcqff8 = true;
      this.mcqf8 =true;
    }
    else{
      this.mcqff8 = true;
      this.mcqf8 = false;
    }
  }

}
