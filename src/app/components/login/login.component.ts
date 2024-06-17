import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  passwordtype = "password"
  seepassword(){
    this.passwordtype =="password"?this.passwordtype = "text":this.passwordtype = "password"
  }
  showpassword()
  {
    this.passwordtype = "text"
  }
  hidepassword()
  {
    this.passwordtype = "password"
  }
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router) { }

  gotoHome(){
    this.router.navigate(["/dashboard"], {relativeTo:this.route});
    let Jyotishhbody:any = document.getElementsByClassName('Jyotishh-body')
    if(Jyotishhbody[0]){ Jyotishhbody[0].style = `overflow-x:hidden;`}
  }
  ngOnInit() {
    let Jyotishhbody:any = document.getElementsByClassName('Jyotishh-body')
    if(Jyotishhbody[0]){ Jyotishhbody[0].style = `overflow:hidden;`}
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form submitted:', this.loginForm.value);
      this.gotoHome()
      // Implement your login logic here
    } else {
      console.log('Invalid form');
    }
  }

  gotoSignUp()
  {
    let Jyotishhbody:any = document.getElementsByClassName('Jyotishh-body')
    if(Jyotishhbody[0]){ Jyotishhbody[0].style = `overflow-x:hidden;`}
    console.log("signup")
    this.router.navigate(["/signup"]);
  }
}
