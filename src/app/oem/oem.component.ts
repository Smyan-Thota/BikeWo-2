import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-oem',
  templateUrl: './oem.component.html',
  styleUrls: ['./oem.component.css']
})
export class OEMComponent implements OnInit {
  OemFrom!:FormGroup;
  lenght:number
   durationInSeconds = 5;


  constructor(private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.OemFrom=this.fromBilder.group({
      CompnyName:['', Validators.required],
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
    if(this.OemFrom.valid){
     this.api.postOEMproduct(this.OemFrom.value)
    .subscribe({
      next:(res)=>{
  
       this.snackbar.open("OEM company Created successfuly","ok",{
        duration:this.durationInSeconds*400,
       })
       this.OemFrom.reset();
      this.router.navigate(['/oemList'])
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
