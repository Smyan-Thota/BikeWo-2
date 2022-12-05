import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { OempurchaseeditComponent } from './oempurchaseedit/oempurchaseedit.component';
@Component({
  selector: 'app-oem-purchase-list',
  templateUrl: './oem-purchase-list.component.html',
  styleUrls: ['./oem-purchase-list.component.css']
})
export class OemPURCHASEListComponent implements OnInit {
  durationInSeconds:5
  displayedColumns: string[] = ['Model','Battery','Quantity','OEM','Status','Edit','Delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, private api: ApiService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getallProducts()
  }
  getallProducts(){
    this.api.getOEMPurchaselist()
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
    openDialog(row:any){
      this.dialog.open(OempurchaseeditComponent,{
        width:'50%',
        data:row
      }).afterClosed().subscribe(val=>{
        if(val==='updyate'){
            this.getallProducts();
        }
    })
    }
    OemPurchaseDelete(id:number){
      this.api.deletEpurchaseProduct(id)
      .subscribe({
        next:(res)=>{
          this.snackbar.open("OEM Purchase Vechicle deleted successfly","ok",{
            duration:this.durationInSeconds*400,
           
          })
          this.getallProducts()
        },
        error:(err)=>{
          this.snackbar.open("error while Deleting the PurchaseVechicle Details!!")
        }
      })
    }
    Logo:string="assets/image/BikeWo-Logo-white.png"
Ulogo:string="assets/image/icons8-user-40.png"
}
