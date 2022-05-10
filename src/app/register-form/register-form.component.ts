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
      users = [this.user, ...users];
    } else {
      users = [this.user];
    }

    //update
    if(this.selectedIndex === -1){ ///error push is not function-------need to be fixed---
      this.user.push(users);
    }else{
      console.log(this.selectedIndex); //give us index of array elements
      console.log(users); //display all array elements
      console.log(this.user);  //return array of indivisual elements




      //this.user.splice(this.selectedIndex, 1, users);

      this.user.splice(this.selectedIndex, 1, this.user);




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
  //let studObj = this.user[index];
  // this.registerForm.setValue({'name': 'steve','email': 'a@gmail.com','phone': '0000000000','address': 'addr'}); 

    let user = JSON.parse(localStorage.getItem('Users')!);

    //console.log(user[index]); //contains all array elements

    let users = user[index];

    this.registerForm.setValue({'name': user[index].name, 'email': user[index].email,'phone': user[index].phone,'address':user[index].address}); 

    // user.forEach((obj: any) => {
    //   this.registerForm.setValue({'name': obj.name,'email': obj.email,'phone': obj.phone,'address':obj.address}); 
    // });
  }


  delete(index: number){
    this.user.splice(index, 1);
    localStorage.setItem("Users", JSON.stringify(this.user));

    this.fetch();
  }



}






function users(users: any): string {
  throw new Error('Function not implemented.');
}

