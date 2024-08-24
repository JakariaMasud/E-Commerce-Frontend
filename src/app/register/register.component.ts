import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email:String=''
  firstName:String=''
  lastName:String=''
  password:string=''

  createAccount (){
    console.log("creating an account")
    console.log("Email: "+this.email)
    console.log("FirstNAME: "+this.firstName)
    console.log("LastName: "+this.lastName)
    console.log("password: "+this.password)
  }
}
