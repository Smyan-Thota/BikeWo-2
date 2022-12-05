import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
 
}
interface vehicle{
  name2:string;
  children2?:vehicle[];
}
interface Miantance{
  name3:string;
  children3?:Miantance[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'OEM',
    children: [{name: 'OEMP Creation'}, {name: 'OEM PURCHASE(VECH)'}, {name: 'OEM PURCHASE( PARTS)'}],
  },
 
];  
const vehicle_DATA: vehicle[] = [
  {
    name2: 'Vehicle',
    children2: [{name2: 'OEMP Creation'}, {name2: 'OEM PURCHASE(VECH)'}, {name2: 'OEM PURCHASE( PARTS)'}],
  },
 
]; 
const Minatancevehicle_DATA: Miantance[] = [
  {
    name3: 'Maintance',
    children3: [{name3: 'vehicleservice'}, {name3: 'Inventry'}],
  },
 
]; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children,);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  treeControl1 = new NestedTreeControl<vehicle>(node => node.children2,);
  dataSource1= new MatTreeNestedDataSource<vehicle>();
  treeControl2 = new NestedTreeControl<Miantance>(node => node.children3,);
  dataSource2= new MatTreeNestedDataSource<Miantance>();
  constructor() {  this.dataSource.data = TREE_DATA; this.dataSource1.data= vehicle_DATA; this.dataSource2.data=Minatancevehicle_DATA}
 
  ngOnInit(): void {
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  hasChild2 = (_: number, node: vehicle) => !!node.children2 && node.children2.length > 0;
  hasChild3 = (_: number, node: Miantance) => !!node.children3 && node.children3.length > 0;
  Logo:string="assets/image/BikeWo-Logo-white.png"
}
