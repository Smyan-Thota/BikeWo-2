import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})

export class InventoryComponent implements OnInit {

  Invertory!:FormGroup;
 lenght:number
  durationInSeconds = 5;
  constructor(private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.Invertory=this.fromBilder.group({
      itemiD:['', Validators.required],
      itemname:['', Validators.required],
      Quantity:['',Validators.required],
      price:['', Validators.required],
      reorder:['', Validators.required],
      massage:['', Validators.required]
    })
  }
    submited(){
      if(this.Invertory.valid){
       this.api.postInventry(this.Invertory.value)
      .subscribe({
        next:(res)=>{
    
         this.snackbar.open("Item add successfuly","ok",{
          duration:this.durationInSeconds*400,
         })
         this.Invertory.reset();
        this.router.navigate(['/Inventory'])
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
