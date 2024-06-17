import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  public clientLogin!:FormGroup
  public astrologerLogin!:FormGroup

  fcns = {
    clientLogin:[
      [{fcn:"firstname",class:"",ph:"First Name"},{fcn:"lastname",class:"",ph:"Last Name"}],
      [{fcn:"email",class:"",ph:"Email ID"}],
      [{fcn:"password",class:"",ph:"Password"}],
      [{fcn:"dob",class:"",ph:"Date of Birth"},{fcn:"birthtime",class:"",ph:"Birth Time"}],
      [{fcn:"zodiacsign",class:"",ph:"Zodiac Sign"}]
    ],
    astrologerLogin:[
      [{fcn:"firstname",class:"",ph:"First Name"},{fcn:"lastname",class:"",ph:"Last Name"}],
      [{fcn:"email",class:"",ph:"Email ID"}],
      [{fcn:"password",class:"",ph:"Password"}],
      [{fcn:"experience",class:"",ph:"Experience"},{fcn:"mobile",class:"",ph:"Mobile"}],
      [{fcn:"languages",class:"",ph:"Languages"}]
    ]
  }
  constructor(public fb:FormBuilder,public router:Router)
  {
   
  }

 

  ClientFormInit()
  {
    this.clientLogin = this.fb.group({
      firstname:[""],
      lastname:[""],
      email:[""],
      password:[""],
      dob:[""],
      birthtime:[""],
      zodiacsign:[""]
    })
  }
  AstrologerFormInit()
  {
    this.astrologerLogin = this.fb.group({
      firstname:[""],
      lastname:[""],
      email:[""],
      password:[""],
      experience:[""],
      mobile:[""],
      languages:[""]
    })
  }
  ngOnInit(): void {
    let Jyotishhbody:any = document.getElementsByClassName('Jyotishh-body')
    if(Jyotishhbody[0]){ Jyotishhbody[0].style = `overflow-x:hidden;`}
    this.ClientFormInit()
    this. AstrologerFormInit()
  }

  onSubmit(f:any)
  {
    if(f['heading'] == 'ASTROLOGER LOGIN')
    {
    console.log("astrologerLogin => ",this.astrologerLogin.value) 
    }
    else{
    console.log("clientLogin => ",this.clientLogin.value) 
    }
    this.router.navigate(["/dashboard"]);
  }

  clientSubmit(){
    console.log("clientLogin => ",this.clientLogin.value)
  }
  astrologerSubmit(){
    console.log("astrologerLogin => ",this.astrologerLogin.value) 
  }
}
