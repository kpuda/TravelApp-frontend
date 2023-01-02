import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseObject } from 'src/app/_objects/ResponseObject';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {


  response:ResponseObject={statusCode:0,message:""};
  successfulVerification:boolean=false;
  unsuccessfullVerification:boolean=false;
  verificationReponse:string="";

  constructor(private activatedRoute: ActivatedRoute, private authService:AuthService,private router: Router) { }

  ngOnInit(): void {

    let token=this.activatedRoute.snapshot.queryParams['token'];
    console.log(token);
    
    if(token){
      this.authService.verify(token).subscribe(
        (response: ResponseObject) =>{
            this.response=response;
            console.log("xD");
            console.log(this.response);
            if(this.response) {
              if(this.response.statusCode==200){
                this.successfulVerification=true;
                this.verificationReponse=this.response.message;
                this.router.navigate(['/homepage']);
              }
            }
            
        }, (error:HttpErrorResponse) =>{
          console.log("xD");
          console.log(error);
          this.response=error.error;
          this.unsuccessfullVerification=true;
          this.verificationReponse="Code: "+this.response.statusCode+", Message: "+this.response.message;
        }
      );
    }
  }

}
