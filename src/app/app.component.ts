import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAdmin: boolean = false;
  isAdminStatus: boolean = false;

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
    this.isAdminStatus = !this.isAdminStatus;
  }
}


