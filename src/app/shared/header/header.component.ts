import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  

  constructor(private router: Router,
              private authService: AuthService){}

  logOut(){
    this.authService.signOut();
    this.router.navigate(['/login']);    
  }

}
