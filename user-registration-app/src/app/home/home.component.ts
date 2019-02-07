import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private user: User, private userService: UserService) { }

  ngOnInit() {
  }

  signUpBtn(userName: string, userEmail: string) {
    console.log('Sign up clicked!');
    this.user.name = userName;
    this.user.email = userEmail;
    console.log('User - ' + JSON.stringify(this.user));
    this.userService.signUpUser(this.user).subscribe((observer) => {
      console.log(observer);
    },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        console.log(err.name);
        console.log(err.message);
        console.log(err.status);
      }
    );
  }

}
