import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() item = '';
  @Input() abc: any;
  myForm: FormGroup= new FormGroup({
    name: new FormControl('',[Validators.required , Validators.minLength(2)]),
    email: new FormControl(''),
    // message: new FormControl(''),
  });

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {}

  onSubmit(){

var flag = false;
console.log(this.abc);

    this.abc.forEach((element:any) => {
      if(element.name == this.name?.value && element.email == this.email?.value){
        console.log("true");
       
        this.router.navigate(['/Home'],
          );
        flag = true;
      }

      });
      if(flag == false){
        alert("invalid login")
      }
   }
    
  get name() {
    return this.myForm.get("name");
  }

  get email() {
    return this.myForm.get("email");
  }

}
