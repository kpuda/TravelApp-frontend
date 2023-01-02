import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const ROLES_KEY = 'auth-roles';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  
  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveRoles(roles: any): void {
    window.sessionStorage.removeItem(ROLES_KEY);
    window.sessionStorage.setItem(ROLES_KEY, JSON.stringify(roles));
    console.log(window.sessionStorage.getItem(ROLES_KEY));
    
  }

  public saveUser(user:string): void{
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY,user);
  }

  public getUsername(): string {
    const user=window.sessionStorage.getItem(USER_KEY);
    if(user){
      return user;
    }
    return '';
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(ROLES_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
