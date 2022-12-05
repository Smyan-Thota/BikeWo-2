import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, MinLengthValidator ,} from '@angular/forms';
@Component({
  selector: 'app-vehicleedit',
  templateUrl: './vehicleedit.component.html',
  styleUrls: ['./vehicleedit.component.css']
})
export class VehicleeditComponent implements OnInit {
  Vehicle!:FormGroup;
  constructor(private fromBilder:FormBuilder,) { }

  ngOnInit(): void {
    this.Vehicle=this.fromBilder.group({
      Model:['', Validators.required],
      Variant:['', Validators.required],
      Battery:['', Validators.required]
      // status:['', Validators.required],
      
    })
  }

}
