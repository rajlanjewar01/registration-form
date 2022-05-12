import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {


  user: any = {};
  data: any;
  selectedIndex = -1;

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

  constructor() {
    this.fetch();
  }
  ngOnInit(): void {
    
  }


  //handle form submit
  onSubmit(){
    this.user = Object.assign(this.user, this.registerForm.value);
    this.add();
  }

  add(){
    let users = [];

    if(localStorage.getItem("Users")) {
      users = JSON.parse(localStorage.getItem('Users')!);
      users = [...users, this.user];
    } else {
      users = [this.user];
      //console.log("inside else");  //return if local storage [Users] is not set (local storage is empty)
    }

    //update
    if(this.selectedIndex === -1){ 
      var data = new Array();
      data.push(users);
    }
    else
    {
      users.splice(this.selectedIndex, 1, users[this.selectedIndex]);

      //console.log(this.selectedIndex); //give us index of array elements
      //console.log(users); //display all array elements
      //console.log(this.user);  //return array of indivisual element
    }

    localStorage.setItem("Users", JSON.stringify(users));
    
    this.registerForm.reset();
    this.fetch();
  }


  fetch(){
    this.data = JSON.parse(localStorage.getItem("Users")!);
  }

  edit(index:any){
    this.selectedIndex = index;
    let user = JSON.parse(localStorage.getItem('Users')!);
    let users = user[index];

    this.registerForm.setValue({'name': user[index].name, 'email': user[index].email,'phone': user[index].phone,'address':user[index].address}); 
  }








  /*
  delete(index: number){
    this.user.splice(index, 1);
    localStorage.setItem("Users", JSON.stringify(this.user));

    this.fetch();
  }
  */



}






function users(users: any): string {
  throw new Error('Function not implemented.');
}

