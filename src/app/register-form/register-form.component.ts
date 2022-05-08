import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';   /////3, 5

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user: any = {};

  //////4, 6
  registerForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
      //Validators.pattern(/[a-z][0-9]/)
    ] ),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ]),

    address: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),

    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10)
    ])

  })

  constructor() { }

  ngOnInit(): void {
  }

  //handle form submit
  onSubmit(){
    //console.log(this.registerForm.value);
    //console.log(this.registerForm.value.name);

    this.user = Object.assign(this.user, this.registerForm.value);
    this.addDetails(this.user);
  }

  addDetails(user:any){
    let users = [];

    if(localStorage.getItem("Users")){
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [user, ...users];
    }else{
      users = [user];
    }
    localStorage.setItem("Users", JSON.stringify(users));

    //reset the form
    this.registerForm.reset();
  }

}
