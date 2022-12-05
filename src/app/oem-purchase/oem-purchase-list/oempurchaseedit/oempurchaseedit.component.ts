import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-oempurchaseedit',
  templateUrl: './oempurchaseedit.component.html',
  styleUrls: ['./oempurchaseedit.component.css']
})
export class OempurchaseeditComponent implements OnInit {
  OEMPURCHASEFrom!:FormGroup;
  durationInSeconds=5;
  actionbtn:string="save";
  constructor(private fromBilder:FormBuilder,  private api:ApiService,  
    @Inject (MAT_DIALOG_DATA) public OemPdata:any, private dialogRef:MatDialogRef<OempurchaseeditComponent>,  private snackbar:MatSnackBar,) { }
  ngOnInit(): void {
    this.OEMPURCHASEFrom=this.fromBilder.group({
      Model:['', Validators.required],
      Variant:['', Validators.required],
      Quantity:['',Validators.required],
      OEM:['',Validators.required],
      status:['', Validators.required],
    });if(this.OemPdata){
      this.actionbtn="Update",
        this.OEMPURCHASEFrom.controls['Model'].setValue(this.OemPdata.Model);
        this.OEMPURCHASEFrom.controls['Battery'].setValue(this.OemPdata.Variant);
        this.OEMPURCHASEFrom.controls['Quantity'].setValue(this.OemPdata.Quantity);
        this.OEMPURCHASEFrom.controls['OEM'].setValue(this.OemPdata.OEM);
        this.OEMPURCHASEFrom.controls['status'].setValue(this.OemPdata.status);
    }
    
  }
  submited(){
    if(!this.OemPdata){
      if(this.OEMPURCHASEFrom.valid){
        this.api.postProduct(this.OEMPURCHASEFrom.value)
       .subscribe({
         next:(res)=>{
     
          this.snackbar.open("Dealer Created successfuly","ok",{
           duration:this.durationInSeconds*400,
          })
          this.OEMPURCHASEFrom.reset();
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
        this.api.postEpurchaseProduct(this.OEMPURCHASEFrom.value, this.OemPdata.id)
        .subscribe({
          next:(res)=>{
            this.snackbar.open("OEM purchase Updated successfuly","ok",{
              duration:this.durationInSeconds*400,
            })
            this.OEMPURCHASEFrom.reset(),
            this.dialogRef.close('Update')
          },
          error:()=>
          this.snackbar.open('Error while Updating the Purchased details')
        })
      }
    
}
