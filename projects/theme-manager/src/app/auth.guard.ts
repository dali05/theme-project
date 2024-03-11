import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Récupérer la valeur de username dans le localStorage
    const username = localStorage.getItem('username');
    const url: string = state.url;

    if (username === 'p1' && url.includes('todo-list2')) {
      // Si l'utilisateur est p1 et tente d'accéder à
      this.router.navigate(['/home']);
      return false;
    } else if (username === 'p2' && url.includes('todo-list1')) {
      // Si l'utilisateur est p2 et tente d'accéder à
      this.router.navigate(['/home']);
      return false;
    } else {
      // Si l'utilisateur a le droit d'accéder à la route demandée, retournez vrai
      return true;
    }
  }
}
