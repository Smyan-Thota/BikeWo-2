import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-vcolor',
  templateUrl: './vcolor.component.html',
  styleUrls: ['./vcolor.component.css']
})
export class VcolorComponent implements OnInit {
  Vcolor!:FormGroup;
  lenght:number
   durationInSeconds = 5;
  constructor(private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.Vcolor=this.fromBilder.group({
      color:['', Validators.required],
    
      // status:['', Validators.required],
      
    })
  }
  submited(){
    if(this.Vcolor.valid){
     this.api.postTesting(this.Vcolor.value)
    .subscribe({
      next:(res)=>{
  
       this.snackbar.open("color Created successfuly","ok",{
        duration:this.durationInSeconds*400,
       })
       this.Vcolor.reset();
      this.router.navigate(['/dealerB'])
      },
      error:()=>{
        this.snackbar.open("Error While adding color creation")
      }
    })
    }
   
    }
    Logo:string="assets/image/BikeWo-Logo-white.png";
    Ulogo:string="assets/image/icons8-user-40.png"
}
