import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');
  editQuote = false;
  showAge = true; 

  toggleAge() {
    this.showAge = !this.showAge; 
  }

  constructor() {
    this.user = new User('Doe', 'John', 25, '', 'https://randomuser.me/api/portraits/lego/2.jpg');
  }
}

