import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  durationInSeconds = 5;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor( private snackBar: MatSnackBar, private fb:FormBuilder, private router: Router){
 
  }
  Login=new FormGroup({
  username:new FormControl(Validators.required),
  password:new FormControl(Validators.required)
 })
  ngOnInit(): void {
  }
  openSnackBar(){
   let username=(<HTMLInputElement>document.getElementById('Uname')).value;
   let password=(<HTMLInputElement>document.getElementById('password')).value;
   
  if(username==='admin'&& password==='admin@1'){
    this.router.navigate(['/DealreList'])
    this.snackBar.open('DealerLoign Successfuly','ok',{
        duration:this.durationInSeconds*1000,
        })
  }
  
  else{
    this.snackBar.open('please enter Valid details', 'ok', {
    
      duration:this.durationInSeconds*1000,
    });
    
  }
  if(username==='user'&& password==='user@1'){
    this.router.navigate(['/User'])
    this.snackBar.open('UserLoginSuccessfuly','ok',{
        duration:this.durationInSeconds*1000,
      })
  }else{
    this.snackBar.open('please enter Valid details', 'ok', {
    
      duration:this.durationInSeconds*1000,
    });
  }
  if(username===''){
    this.snackBar.open('please enter Username !','ok',{
 
      duration:this.durationInSeconds*1000,
    })
  }else if(password==''){
    this.snackBar.open('please enter password !','ok',{
   
      duration:this.durationInSeconds*1000,
    })
  
  }
  }
Logo:string="assets/image/BikeWo-Logo-white.png"
Loginimg:string="assets/image/Login.gif"
}



