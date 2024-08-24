import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:String=''
  password:String=''

  login(){
    console.log('Logging in: 👋');
    console.log("email: "+this.email)
    console.log("password: "+this.password)

  }
}
