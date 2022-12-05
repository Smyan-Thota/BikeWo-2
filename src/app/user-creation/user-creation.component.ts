import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder ,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {
  durationInSeconds:5;
  Usercreation!:FormGroup;

 
  constructor(private fromBilder:FormBuilder, private api:ApiService, private snackbar:MatSnackBar, private router: Router ) { }

  ngOnInit(): void {
    this.Usercreation=this.fromBilder.group({
      username:["",Validators.required],
      usernumber:["",Validators.required],
      Uemail:["",Validators.required],
      Uaddress:["",Validators.required],
      Ucity:["",Validators.required],
      Ustate:["",Validators.required],
      Upincode:["",Validators.required],
      Udistrict:["",Validators.required],
      Umassage:["",Validators.required],
    })
  }
  // emailFormControl1 = new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  // emailFormControl2 = new UntypedFormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]);
  // emailFormControl = new UntypedFormControl('', [Validators.required, Validators.email]);
  // addressFormControl = new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  // cityFormControl = new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  // StateFormControl = new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  // PincodeFormControl=new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  // StateDFormControl=new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  // MassageFormControl=new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  // matcher = new MyErrorStateMatcher();
  Usubmite(){
    // if(this.Usercreation.valid){
    //   this.api.postUproduct(this.Usercreation.value)
    //   .subscribe({
    //     next:(res)=>{

    //       this.snackbar.open("user created succefully","ok",{
    //         duration:this.durationInSeconds*400
    //       })
    //       this.Usercreation.reset();
    //       this.router.navigate['/Ucreation']
    //     },
    //     error:()=>{
    //       this.snackbar.open("Error While adding User")
    //     }

    //   })
    // }
}


  Logo:string="assets/image/BikeWo-Logo-white.png"
}
