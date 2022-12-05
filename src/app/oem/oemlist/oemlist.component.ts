import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { OemeditComponent } from './oemedit/oemedit.component';
@Component({
  selector: 'app-oemlist',
  templateUrl: './oemlist.component.html',
  styleUrls: ['./oemlist.component.css']
})
export class OEMListComponent implements OnInit {
  durationInSeconds = 5;
  displayedColumns: string[] = ['CompnyName', 'contactNumber', 'Email', 'Address','city','State','Pincode','massage','Edit','Delete'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, private api: ApiService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getallProducts()
  }
  getallProducts(){
    this.api.getOEMproduct()
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
      this.dialog.open(OemeditComponent,{
        width:'50%',
        data:row
      }).afterClosed().subscribe(val=>{
        if(val==='update'){
            this.getallProducts();
        }
    })
    }
    deletedOem(id:number){
      this.api.deletOEMcreation(id)
      .subscribe({
        next:(res)=>{
          this.snackbar.open("OEM company Deleted successfuly","ok",{
            duration:this.durationInSeconds*400,
           })
          this.getallProducts()
        },
        error:(err)=>{
          this.snackbar.open('error while Deleted the OEM Details')
        }
      })
    }
    Logo:string="assets/image/BikeWo-Logo-white.png"
Ulogo:string="assets/image/icons8-user-40.png"
}
