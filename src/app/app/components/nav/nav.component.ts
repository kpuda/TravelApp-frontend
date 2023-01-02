import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

   buttonText='';
   isLoggedIn=false;
  constructor(private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.buttonText = this.tokenStorage.getUsername();

    if(!this.buttonText){
      this.buttonText="Zaloguj się";
    }
  }

  logout(){
      this.tokenStorage.signOut();
      this.reloadPage();
  }

  reloadPage(): void {
    window.location.reload();
  }

  routeToLogin(): void {
    this.router.navigate(['/login']);
  }
}
