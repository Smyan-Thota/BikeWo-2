import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-oem-purchase',
  templateUrl: './oem-purchase.component.html',
  styleUrls: ['./oem-purchase.component.css']
})
export class OemPURCHASEComponent implements OnInit {
  OemFrom!:FormGroup;
  dataSource: MatTableDataSource<any>;
  OEMPURCHASEFrom!:FormGroup;
  lenght:number
   durationInSeconds = 5;

   
  constructor(private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router, ) { }

  ngOnInit(): void {
    this.OEMPURCHASEFrom=this.fromBilder.group({
      Model:['', Validators.required],
      Battery:['', Validators.required],
      Quantity:['',Validators.required],
      OEM:['',Validators.required],
      status:['', Validators.required],
      
    })
 
  }

  submited(){
    if(this.OEMPURCHASEFrom.valid){
     this.api.postOEMpurchase(this.OEMPURCHASEFrom.value)
    .subscribe({
      next:(res)=>{
  
       this.snackbar.open("vehicle purchased successfuly","ok",{
        duration:this.durationInSeconds*400,
       })
       this.OEMPURCHASEFrom.reset();
      this.router.navigate(['/purchaseList'])
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
