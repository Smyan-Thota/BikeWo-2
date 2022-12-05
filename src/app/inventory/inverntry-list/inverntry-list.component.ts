import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-inverntry-list',
  templateUrl: './inverntry-list.component.html',
  styleUrls: ['./inverntry-list.component.css']
})
export class InverntryListComponent implements OnInit {
  durationInSeconds:5
  displayedColumns: string[] = ['itemiD', 'itemname', 'Quantity', 'price','reorder','massage','Edit','Delete' ];
  dataSource: MatTableDataSource<any>;
  paginator: MatPaginator;
  sort: MatSort;
  constructor(public dialog: MatDialog, private api: ApiService, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getallProducts()
  }
  getallProducts(){
    this.api.getInventry()
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
    // openDialog(row:any){
    //   this.dialog.open(DealerEditComponent,{
    //     width:'50%',
    //    data:row
    //   }).afterClosed().subscribe(val=>{
    //       if(val==='update'){
    //           this.getallProducts();
    //       }
    //   })
    // }
    deletproduct(id:number){
      this.api.deletproduct(id)
      .subscribe({
         next:(res)=>{
          this.snackbar.open("Dealer Deleted successfuly","ok",{
            duration:this.durationInSeconds*400,
           })
          this.getallProducts()
         },
         error:(err)=>{
          this.snackbar.open("Error while fetching a Deleting Dealer details")
        }
      })
    }
    Logo:string="assets/image/BikeWo-Logo-white.png"
Ulogo:string="assets/image/icons8-user-40.png"
}
