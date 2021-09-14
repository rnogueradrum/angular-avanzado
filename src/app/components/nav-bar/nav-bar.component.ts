import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private _authService: AuthService) { }



  ngOnInit(): void {

   // console.log(`Logueado: ${this.isLogged()}`);

  }

  // isLogged(): boolean {
  //   let isLogged = this._authService.isLoggedIn;
  //   return isLogged;

  // }
  // logout():boolean {

  //   return this._authService.logout();

  // }


}
