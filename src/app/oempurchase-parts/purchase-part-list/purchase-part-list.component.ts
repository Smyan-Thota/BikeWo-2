import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { PartseditComponent } from './partsedit/partsedit.component';
@Component({
  selector: 'app-purchase-part-list',
  templateUrl: './purchase-part-list.component.html',
  styleUrls: ['./purchase-part-list.component.css']
})
export class PurchasePartListComponent implements OnInit {
  durationInSeconds:5
  displayedColumns: string[] = ['CompnyName','partspecification', 'Model', 'OEMname','NoFpurchases','status', 'Edit','Delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, private api: ApiService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getallProducts()
  }
  getallProducts(){
    this.api.getOEMPurchasepartlist()
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
      this.dialog.open(PartseditComponent,{
        width:'50%',
        data:row
      });
    }
    DpurchaseParts(id:number){
      this.api.deletPparts(id)
      .subscribe({
        next:(res)=>{
          this.snackbar.open("OEM Purchase Vechicle parts deleted successfly","ok",{
            duration:this.durationInSeconds*400,
           
          })
        },
        error:(err)=>{
          this.snackbar.open("Error Vechicle parts deleted successfly","ok",{
            duration:this.durationInSeconds*400,
           
          })
        }
      })
    }
    Logo:string="assets/image/BikeWo-Logo-white.png"
Ulogo:string="assets/image/icons8-user-40.png"
}
