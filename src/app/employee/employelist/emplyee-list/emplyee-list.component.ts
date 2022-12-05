import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { EmpeditComponent } from '../empedit/empedit.component';
@Component({
  selector: 'app-emplyee-list',
  templateUrl: './emplyee-list.component.html',
  styleUrls: ['./emplyee-list.component.css']
})
export class EmplyeeListComponent implements OnInit {
  durationInSeconds:5
  displayedColumns: string[] = ['EmployeeName', 'contactNumber', 'Email', 'Address','city','State','Pincode','massage','Edit','Delete'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public dialog: MatDialog, private api: ApiService, private snackbar:MatSnackBar ) { }

  ngOnInit(): void {
    this.getallProducts()
  }
 
  getallProducts(){
    this.api.getEmplyProduct()
   .subscribe({
    next:(res)=>{
     this.dataSource=new MatTableDataSource(res)
     this.dataSource.paginator=this.paginator;
     this.dataSource.sort=this.sort;
    },
    error:(err)=>{
      this.snackbar.open("Error while fetching a Dealer details")
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
      this.dialog.open(EmpeditComponent,{
        width:'50%',
        data:row
      }).afterClosed().subscribe(val=>{
        if(val==='update'){
            this.getallProducts();
        }
    })
    }
    deletEmplyee(id:number){
      this.api.deletEmproduct(id)
      .subscribe({
        next:(res)=>{
          this.snackbar.open("Emplyee Deleted successfuly","ok",{
            duration:this.durationInSeconds*400,
           })
         this.getallProducts()
        },
        error:(err)=>{
          this.snackbar.open("Error while fetching a Deleting Emplyee details")
        }
      })
    }
    Logo:string="assets/image/BikeWo-Logo-white.png"
Ulogo:string="assets/image/icons8-user-40.png"
}
