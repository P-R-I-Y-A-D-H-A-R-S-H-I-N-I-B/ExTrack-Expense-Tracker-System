import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email:String ="";
  pwd : String ="";

  constructor(private router: Router,private http: HttpClient,public l_service:LoginServiceService,public a:AuthService) { }

  ngOnInit(): void {
  }
  login() {
 
    let bodyData = {
      email: this.email,
      pwd: this.pwd,
    };
 
        this.http.post("http://localhost:8086/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.status)
        {
          alert("Login successfully");
          this.a.loginUser();
          this.l_service.setEmail(bodyData.email);
          localStorage.setItem("email","priya@gmail.com");
          this.router.navigateByUrl('/home2');
    
 
        }
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
      
    }
 
}
