import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './feature/login/login-pages/login-pages.component';
import { RegisterComponent } from './feature/login/register/register.component';
import { PagesStudentsComponent } from './feature/pages/pages-students/pages-students.component';
import { PagesTeacherComponent } from './feature/pages/pages-teacher/pages-teacher.component';
import { SecurityGuard } from './shared/guards/security.guard';


const routes: Routes = [
  {path:'', component:LoginPagesComponent},
  {path:'login',component:LoginPagesComponent},
  {path:'professores', component:PagesTeacherComponent, canActivate:[SecurityGuard]},
  {path:'alunos',component:PagesStudentsComponent,canActivate:[SecurityGuard] },
  {path:'cadastro',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
