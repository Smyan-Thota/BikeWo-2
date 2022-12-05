import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-batteryspec',
  templateUrl: './batteryspec.component.html',
  styleUrls: ['./batteryspec.component.css']
})
export class BatteryspecComponent implements OnInit {
  battery!:FormGroup;
  lenght:number
   durationInSeconds = 5;
  constructor(private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.battery=this.fromBilder.group({
      batterySpec:['', Validators.required],
    
      // status:['', Validators.required],
      
    })
  }
  submited(){
    if(this.battery.valid){
     this.api.postOEMpurchase(this.battery.value)
    .subscribe({
      next:(res)=>{
  
       this.snackbar.open("vehicle purchased successfuly","ok",{
        duration:this.durationInSeconds*400,
       })
       this.battery.reset();
      this.router.navigate(['/'])
      },
      error:()=>{
        this.snackbar.open("Error While adding OEM purchase creation")
      }
    })
    }
   
    }
    Logo:string="assets/image/BikeWo-Logo-white.png";
    Ulogo:string="assets/image/icons8-user-40.png"
}
