import { Component, Inject, OnInit, } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-dealer-edit',
  templateUrl: './dealer-edit.component.html',
  styleUrls: ['./dealer-edit.component.css']
})
export class DealerEditComponent implements OnInit {

  DealerFrom!:FormGroup;
  lenght:number
  durationInSeconds = 5;
  actionbtn:string ="save";
  constructor(private formBilder:FormBuilder, private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public edata: any,
    private snackbar:MatSnackBar, private router:Router , private dialogRef: MatDialogRef<DealerEditComponent>,) { }

  ngOnInit(): void {
    this.DealerFrom=this.formBilder.group({
      DealerName:['', Validators.required],
      contactNumber:['', Validators.required],
      Email:['',Validators.required],
      Address:['', Validators.required],
      city:['', Validators.required],
      State:['',Validators.required],
      Pincode:['',Validators.required],
      district:['',Validators.required],
      massage:['',Validators.required]
    });
   if(this.edata){
    this.actionbtn="Update"
    this.DealerFrom.controls['DealerName'].setValue(this.edata.DealerName);
    this.DealerFrom.controls['contactNumber'].setValue(this.edata.contactNumber);
    this.DealerFrom.controls['Email'].setValue(this.edata.Email);
    this.DealerFrom.controls['Address'].setValue(this.edata.Address);
    this.DealerFrom.controls['city'].setValue(this.edata.city);
    this.DealerFrom.controls['State'].setValue(this.edata.State);
    this.DealerFrom.controls['Pincode'].setValue(this.edata.Pincode);
    this.DealerFrom.controls['district'].setValue(this.edata.district);
    this.DealerFrom.controls['massage'].setValue(this.edata.massage);
   }
  }
  submited(){
  if(!this.edata){
    if(this.DealerFrom.valid){
      this.api.postProduct(this.DealerFrom.value)
     .subscribe({
       next:(res)=>{
   
        this.snackbar.open("Dealer Created successfuly","ok",{
         duration:this.durationInSeconds*400,
        })
        this.DealerFrom.reset();
       this.dialogRef.close('save')
       },
       error:()=>{
         this.snackbar.open("Error While adding dealer creation")
       }
     })
     }
  }else{
    this.updatedProduct()
  }

    }
    updatedProduct(){
      this.api.postEProduct(this.DealerFrom.value, this.edata.id)
      .subscribe({
        next:(res)=>{
          this.snackbar.open("Dealer Updated successfuly","ok",{
            duration:this.durationInSeconds*400,
           })
           this.DealerFrom.reset()
           this.dialogRef.close('Update')
        },
        error:()=>{
          this.snackbar.open("Error While Updating dealer")
        }
      })
    }
    
}
