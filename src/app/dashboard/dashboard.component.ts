import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  token:any  
  constructor(private auth:AuthService, private router: Router){
    
  }
  navHome(){
    this.router.navigate(['']);
  }
  logout() {
    this.token = localStorage.getItem('token');
    this.auth.logout(this.token);
    if (!this.token) {
      this.router.navigate(['/login']);
      console.log("Token eliminado:", this.token)
    }
  }
  
}
