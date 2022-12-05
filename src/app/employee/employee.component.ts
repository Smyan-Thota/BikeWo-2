import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmployeeFrom!:FormGroup;
  lenght:number
   durationInSeconds = 5;
  constructor(private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.EmployeeFrom=this.fromBilder.group({
      EmployeeName:['', Validators.required],
      contactNumber:['', Validators.required],
      Email:['',Validators.required],
      Address:['', Validators.required],
      city:['', Validators.required],
      State:['',Validators.required],
      Pincode:['',Validators.required],
      district:['',Validators.required],
      massage:['',Validators.required]
    })
  }
  submited(){
    if(this.EmployeeFrom.valid){
     this.api.postEmplyProduct(this.EmployeeFrom.value)
    .subscribe({
      next:(res)=>{
  
       this.snackbar.open("Employee Created successfuly","ok",{
        duration:this.durationInSeconds*400,
       })
       this.EmployeeFrom.reset();
      this.router.navigate(['/emplyeeList'])
      },
      error:()=>{
        this.snackbar.open("Error While adding Employee creation")
      }
    })
    }
   
    }
    Logo:string="assets/image/BikeWo-Logo-white.png";
    Ulogo:string="assets/image/icons8-user-40.png"
}
