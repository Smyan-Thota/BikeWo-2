import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { VehicleeditComponent } from './vehicleedit/vehicleedit.component';

@Component({
  selector: 'app-vehicle-details-list',
  templateUrl: './vehicle-details-list.component.html',
  styleUrls: ['./vehicle-details-list.component.css']
})
export class VehicleDetailsListComponent implements OnInit {
  displayedColumns: string[] = ['Model','Variant','Battery','Edit','Delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, private api: ApiService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getallProducts()
  }
  getallProducts(){
    this.api.getVehicle()
   .subscribe({
    next:(res)=>{
     this.dataSource=new MatTableDataSource(res)
     this.dataSource.paginator=this.paginator;
     this.dataSource.sort=this.sort;
    },
    error:(err)=>{
      this.snackbar.open("Error while fetching a OEM details")
    }
  
   })
   
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    openDialog(row){
      this.dialog.open(VehicleeditComponent,{
        width:'50%'
        
      });
    }
    Logo:string="assets/image/BikeWo-Logo-white.png"
Ulogo:string="assets/image/icons8-user-40.png"
}
