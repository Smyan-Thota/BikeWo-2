import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {

  DealerName: any;
  position: number;
  contact: number;
  Email:string;
  address:string;
  Edit:string;
  userpermission:string;
}
const DealerComponent: PeriodicElement[] = [
  {position: 1, DealerName: 'Raju', contact:90340994848, Email: 'raju@gmail.com',address:'Hyd', Edit:'Edit', userpermission:'permission'},



];
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  DealerComponent: string[] = ['position', 'name', 'contact', 'Email','address','status','Adminprimition','userpermission','Edit','Delete'];
  dataSource = DealerComponent;
  constructor() { }

  ngOnInit(): void {
  }

  Logo:string="assets/image/BikeWo-Logo-white.png"
}
