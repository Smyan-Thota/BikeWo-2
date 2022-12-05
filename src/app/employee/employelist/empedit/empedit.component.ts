import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit {
  EmployeeFrom!:FormGroup;
  lenght:number
   durationInSeconds = 5;
   actionbtn:string ="save";
  constructor(private fromBilder:FormBuilder, @Inject(MAT_DIALOG_DATA) public eMdata: any,
  private dialogRef:MatDialogRef<EmpeditComponent> , private api:ApiService,  private snackbar:MatSnackBar, private router:Router , 
  
  
  ) { }

  ngOnInit(): void {
    this.actionbtn="Update"
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
 if(this.eMdata){
 this.EmployeeFrom.controls['EmployeeName'].setValue(this.eMdata.EmployeeName);
 this.EmployeeFrom.controls['contactNumber'].setValue(this.eMdata.contactNumber);
 this.EmployeeFrom.controls['Email'].setValue(this.eMdata.Email);
 this.EmployeeFrom.controls['Address'].setValue(this.eMdata.Address);
 this.EmployeeFrom.controls['city'].setValue(this.eMdata.city);
 this.EmployeeFrom.controls['State'].setValue(this.eMdata.State);
 this.EmployeeFrom.controls['Pincode'].setValue(this.eMdata.Pincode);
 this.EmployeeFrom.controls['district'].setValue(this.eMdata.district);
 this.EmployeeFrom.controls['massage'].setValue(this.eMdata.massage);
 }

  }
  submited(){
if(!this.eMdata){
  if(this.EmployeeFrom.valid){
    this.api.postEmplyProduct(this.EmployeeFrom.value)
   .subscribe({
     next:(res)=>{
 
      this.snackbar.open("Employee Created successfuly","ok",{
       duration:this.durationInSeconds*400,
      })
      this.EmployeeFrom.reset();
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
 } updatedProduct(){
        this.api.postEmProduct(this.EmployeeFrom.value, this.eMdata.id)
        .subscribe({
          next:(res)=>{
            this.snackbar.open("Emplyee Updated successfuly","ok",{
              duration:this.durationInSeconds*400,
             })
             this.EmployeeFrom.reset()
             this.dialogRef.close('Update')
          },
          error:()=>{
            this.snackbar.open("Error While Updating dealer")
          }
        })
      }
}

