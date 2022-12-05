import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-user-loign',
  templateUrl: './user-loign.component.html',
  styleUrls: ['./user-loign.component.css']
})
export class UserLoignComponent implements OnInit {

  DealerFrom!:FormGroup;
 lenght:number
  durationInSeconds = 5;
  constructor(private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.DealerFrom=this.fromBilder.group({
      DealerName:['', Validators.required],
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
    if(this.DealerFrom.valid){
     this.api.postProduct(this.DealerFrom.value)
    .subscribe({
      next:(res)=>{
  
       this.snackbar.open("Dealer Created successfuly","ok",{
        duration:this.durationInSeconds*400,
       })
       this.DealerFrom.reset();
      this.router.navigate(['/dealerB'])
      },
      error:()=>{
        this.snackbar.open("Error While adding dealer creation")
      }
    })
    }
   
    }
    Logo:string="assets/image/BikeWo-Logo-white.png";
    Ulogo:string="assets/image/icons8-user-40.png"
}
