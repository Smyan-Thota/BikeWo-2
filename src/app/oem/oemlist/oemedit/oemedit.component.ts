import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-oemedit',
  templateUrl: './oemedit.component.html',
  styleUrls: ['./oemedit.component.css']
})
export class OemeditComponent implements OnInit {

  OemFrom!:FormGroup;
  lenght:number
   durationInSeconds = 5;
   actionbtn:string ="save";
  constructor(private fromBilder:FormBuilder, @Inject(MAT_DIALOG_DATA) public OEmedit:any, private api:ApiService, private snackbar:MatSnackBar,  private dialogRef: MatDialogRef<OemeditComponent> ) { }

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
    if(this.OEmedit){
      this.actionbtn="Update"
      this.OemFrom.controls['CompnyName'].setValue(this.OEmedit.CompnyName);
      this.OemFrom.controls['contactNumber'].setValue(this.OEmedit.contactNumber);
      this.OemFrom.controls['Email'].setValue(this.OEmedit.Email);
      this.OemFrom.controls['Address'].setValue(this.OEmedit.Address);
      this.OemFrom.controls['city'].setValue(this.OEmedit.city);
      this.OemFrom.controls['State'].setValue(this.OEmedit.State);
      this.OemFrom.controls['Pincode'].setValue(this.OEmedit.Pincode);
      this.OemFrom.controls['district'].setValue(this.OEmedit.district);
      this.OemFrom.controls['massage'].setValue(this.OEmedit.massage);
      
    }
  }
  submited(){
    if(!this.OEmedit){
      if(this.OemFrom.valid){
        this.api.postOEMproduct(this.OemFrom.value)
       .subscribe({
         next:(res)=>{
     
          this.snackbar.open("Dealer Created successfuly","ok",{
           duration:this.durationInSeconds*400,
          })
          this.OemFrom.reset();
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
      updatedProduct() {
        this.api.postOEMcreation(this.OemFrom.value, this.OEmedit.id)
        .subscribe({
          next:(res)=>{
            this.snackbar.open("Dealer Updated successfuly","ok",{
              duration:this.durationInSeconds*400,
             })
             this.OemFrom.reset()
             this.dialogRef.close('Update')
          },
          error:()=>{
            this.snackbar.open("Error While Updating dealer")
          }
        })
      }
}
