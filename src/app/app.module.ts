import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';
import { AddModulesComponent } from './add-modules/add-modules.component';
import { TeachersComponent } from './teachers/teachers.component';
import { RolesComponent } from './roles/roles.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { TheCourseComponent } from './the-course/the-course.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { Module4Component } from './module4/module4.component';
import { Module5Component } from './module5/module5.component';
import { Module6Component } from './module6/module6.component';
import { Module7Component } from './module7/module7.component';
import { Module8Component } from './module8/module8.component';
import { Module9Component } from './module9/module9.component';
import { Module10Component } from './module10/module10.component';
import { Module11Component } from './module11/module11.component';
import { Module12Component } from './module12/module12.component';
import { Module13Component } from './module13/module13.component';
import { from } from 'rxjs';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { CarouselItemDirective } from './carousel-item.directive';
import { CarouselComponent, CarouselItemElement } from './carousel.component';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ModulesComponent,
    AddModulesComponent,
    TeachersComponent,
    RolesComponent,
    AddTopicsComponent,
    AboutUsComponent,
    OurVisionComponent,
    TheCourseComponent,
    ResourcesComponent,
    ContactComponent,
    CurriculumComponent,
    Module1Component,
    Module2Component,
    Module3Component,
    Module4Component,
    Module5Component,
    Module6Component,
    Module7Component,
    Module8Component,
    Module9Component,
    Module10Component,
    Module11Component,
    Module12Component,
    Module13Component,
    AddTeacherComponent,
    CarouselComponent, CarouselItemElement, CarouselItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    QuillModule,
    SlideshowModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
