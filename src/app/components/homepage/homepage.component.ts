import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WrappedListResponse } from 'src/app/_objects/WrappedListResponse';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  usersList=OFFLINE;

  constructor(private tokenStorage: TokenStorageService, private authService:AuthService) { }

  ngOnInit(): void {
      this.populateList();
  }
  
  private async populateList(){
    await this.authService.users().subscribe(
      (response: WrappedListResponse)=>{
        this.usersList=response.list;
        console.log("loaded");
        
        console.log(this.usersList);
        
      },
      (error:HttpErrorResponse)=> {
      console.log(error);
      }
    )
  }

}
const OFFLINE: string[]=['xd'];