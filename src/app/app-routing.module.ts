import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';
import { TheCourseComponent } from './the-course/the-course.component';
import { LoginComponent } from './login/login.component';
import { ResourcesComponent } from './resources/resources.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { RolesComponent } from './roles/roles.component';
import { AddModulesComponent } from './add-modules/add-modules.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { ContactComponent } from './contact/contact.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AboutUsComponent } from './about-us/about-us.component';
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
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AuthGardGuard } from './AuthGuard/auth-gard.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'modules', component: ModulesComponent},
  {path: 'The-Course', component: TheCourseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'Resources', component: ResourcesComponent},
  {path: 'Our-Vision', component: OurVisionComponent},
  {path: 'roles', component: RolesComponent},
  {path: 'add-modules', component: AddModulesComponent},
  {path: 'Add-topics', component: AddTopicsComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'About-Us', component: AboutUsComponent},
  {path: 'Curriculum', component: CurriculumComponent, canActivate: [AuthGardGuard]},
  {path: 'module-1', component: Module1Component, canActivate: [AuthGardGuard]},
  {path: 'module-2', component: Module2Component, canActivate: [AuthGardGuard]},
  {path: 'module-3', component: Module3Component, canActivate: [AuthGardGuard]},
  {path: 'module-4', component: Module4Component, canActivate: [AuthGardGuard]},
  {path: 'module-5', component: Module5Component, canActivate: [AuthGardGuard]},
  {path: 'module-6', component: Module6Component, canActivate: [AuthGardGuard]},
  {path: 'module-7', component: Module7Component, canActivate: [AuthGardGuard]},
  {path: 'module-8', component: Module8Component, canActivate: [AuthGardGuard]},
  {path: 'module-9', component: Module9Component, canActivate: [AuthGardGuard]},
  {path: 'module-10', component: Module10Component, canActivate: [AuthGardGuard]},
  {path: 'module-11', component: Module11Component, canActivate: [AuthGardGuard]},
  {path: 'module-12', component: Module12Component, canActivate: [AuthGardGuard]},
  {path: 'module-13', component: Module13Component, canActivate: [AuthGardGuard]},
  {path: 'add-teacher', component: AddTeacherComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
