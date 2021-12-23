import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators} from '@angular/forms'; 



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup= new FormGroup({
    name: new FormControl('',[Validators.required , Validators.minLength(4)]),
    email: new FormControl(''),
    // message: new FormControl(''),
  });
  currentItem = 'Television';
  // a = [{}];
  a: any=[];
  jsonObject = {
    name: '',
    email: ''
  }
  constructor() { }

  

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.myForm.get('name'))

    if(this.myForm.valid){
      this.jsonObject = {
        name: this.myForm.get('name')?.value,
        email:  this.myForm.get('email')?.value
      }
      this.a.push(this.jsonObject);
    console.log(this.a)

    }
    else{
      console.log("error")
    }
    
  }
    
  get name() {
    return this.myForm.get("name");
  }

  get email() {
    return this.myForm.get("email");
  }

  // get message() {
  //   return this.myForm.get("message");
  // }



}
