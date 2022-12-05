import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-oempurchase-parts',
  templateUrl: './oempurchase-parts.component.html',
  styleUrls: ['./oempurchase-parts.component.css']
})
export class OempurchasePartsComponent implements OnInit {
  OEMPURCHASEFparts!:FormGroup;
  lenght:number
   durationInSeconds = 5;
  constructor( private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.OEMPURCHASEFparts=this.fromBilder.group({
      CompnyName:['', Validators.required],
      partspecification:['', Validators.required],
      Model:['',Validators.required],
      OEMname:['', Validators.required],
      NoFpurchases:['', Validators.required],
      status:['',Validators.required],
      // Pincode:['',Validators.required],
      // district:['',Validators.required],
      // massage:['',Validators.required]
      
    })
  }
  submited(){
    if(this.OEMPURCHASEFparts.valid){
     this.api.postOEMpurchaseParts(this.OEMPURCHASEFparts.value)
    .subscribe({
      next:(res)=>{
  
       this.snackbar.open("vehicle parts created successfuly","ok",{
        duration:this.durationInSeconds*400,
       })
       this.OEMPURCHASEFparts.reset();
      this.router.navigate(['/purchasepartList'])
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
