import { Component,Inject, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-partsedit',
  templateUrl: './partsedit.component.html',
  styleUrls: ['./partsedit.component.css']
})
export class PartseditComponent implements OnInit {
  OEMPURCHASEFparts!:FormGroup;
  durationInSeconds = 5;
  actionbtn:string ="save";
  constructor(private fromBilder:FormBuilder,
     @Inject(MAT_DIALOG_DATA) public PParts:any, 
     private dialogRef:MatDialogRef<PartseditComponent>, private api:ApiService, private snackbar:MatSnackBar ) { }

  ngOnInit(): void {
    this.OEMPURCHASEFparts=this.fromBilder.group({
      CompnyName:['', Validators.required],
      partspecification:['', Validators.required],
      Model:['',Validators.required],
      OEMname:['', Validators.required],
      NoFpurchases:['', Validators.required],
      status:['',Validators.required],
    
    });
   if(this.PParts){
    this.actionbtn="Updated"
    this.OEMPURCHASEFparts.controls['CompnyName'].setValue(this.PParts.CompnyName);
    this.OEMPURCHASEFparts.controls['partspecification'].setValue(this.PParts.partspecification);
    this.OEMPURCHASEFparts.controls['Model'].setValue(this.PParts.Model);
    this.OEMPURCHASEFparts.controls['OEMname'].setValue(this.PParts.OEMname);
    this.OEMPURCHASEFparts.controls['NoFpurchases'].setValue(this.PParts.NoFpurchases);
    this.OEMPURCHASEFparts.controls['status'].setValue(this.PParts.status);
   }
   
  }
  submited(){
    if(!this.PParts){
      if(this.OEMPURCHASEFparts.valid){
        this.api.postOEMpurchaseParts(this.OEMPURCHASEFparts.value)
       .subscribe({
         next:(res)=>{
     
          this.snackbar.open("Dealer Created successfuly","ok",{
           duration:this.durationInSeconds*400,
          })
          this.OEMPURCHASEFparts.reset();
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
        this.api.postPparts(this.OEMPURCHASEFparts.value, this.PParts.id)
        .subscribe({
          next:(res)=>{
            this.snackbar.open("Purchase parts Updated successfuly","ok",{
              duration:this.durationInSeconds*400,
             })
             this.OEMPURCHASEFparts.reset()
             this.dialogRef.close('Update')
          },
          error:()=>{
            this.snackbar.open("Error While Updating dealer")
          }
        })
      }
}
