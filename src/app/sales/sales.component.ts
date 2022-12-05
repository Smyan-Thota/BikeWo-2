import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder , FormGroup, FormGroupDirective, NgForm,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  DealerName:any;

  DistrictControl = new FormControl('', Validators.required);

  selectFormControl = new FormControl('', Validators.required);
  constructor(private fromBilder:FormBuilder) { }

  ngOnInit(): void {
  }
  emailFormControl1 = new FormControl('', [Validators.required, Validators.nullValidator]);
  emailFormControl2 = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  addressFormControl = new FormControl('', [Validators.required, Validators.nullValidator]);
  cityFormControl = new FormControl('', [Validators.required, Validators.nullValidator]);
  StateFormControl = new FormControl('', [Validators.required, Validators.nullValidator]);
  PincodeFormControl=new FormControl('', [Validators.required, Validators.nullValidator]);
  StateDFormControl=new FormControl('', [Validators.required, Validators.nullValidator]);
  MassageFormControl=new FormControl('', [Validators.required, Validators.nullValidator]);
  matcher = new MyErrorStateMatcher();
  Logo:string="assets/image/BikeWo-Logo-white.png"
}
