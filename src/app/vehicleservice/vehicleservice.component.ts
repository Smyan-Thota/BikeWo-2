import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators, FormBuilder , FormGroup, FormGroupDirective, NgForm,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-vehicleservice',
  templateUrl: './vehicleservice.component.html',
  styleUrls: ['./vehicleservice.component.css']
})
export class VehicleserviceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  emailFormControl1 = new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  emailFormControl2 = new UntypedFormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]);
  emailFormControl = new UntypedFormControl('', [Validators.required, Validators.email]);
  addressFormControl = new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  cityFormControl = new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  StateFormControl = new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  PincodeFormControl=new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  StateDFormControl=new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  MassageFormControl=new UntypedFormControl('', [Validators.required, Validators.nullValidator]);
  matcher = new MyErrorStateMatcher();
}
