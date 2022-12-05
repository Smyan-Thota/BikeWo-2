import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {

  Vtype: any;
  position: number;
  Vmodel: string;
  Stype:string;
  Email:string;
  address:string;

}
const DealerComponent: PeriodicElement[] = [
  {position: 1, Vtype: 'bike', Vmodel:'bajaj220', Stype:'WaterWash', Email: 'raju@gmail.com',address:'Hyd'},



];
@Component({
  selector: 'app-vservices-list',
  templateUrl: './vservices-list.component.html',
  styleUrls: ['./vservices-list.component.css']
})
export class VservicesListComponent implements OnInit {
  DealerComponent: string[] = ['position', 'Vtype','Vmodel','Stype','Email','address'];
  dataSource = DealerComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
