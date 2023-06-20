import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component {
  constructor(private router: Router,public l_service:LoginServiceService,public a:AuthService){
    
  }
  logout1(){
    
    this.a.logoutUser();
    alert("logged out");
    localStorage.clear();
    this.router.navigateByUrl(''); 

  }

}
