import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(): boolean{
    const teacherStorage = sessionStorage.getItem('teacher');
    if(teacherStorage){
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
  
}
