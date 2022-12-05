import { Component, OnInit, ViewChild  } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-vcolor-list',
  templateUrl: './vcolor-list.component.html',
  styleUrls: ['./vcolor-list.component.css']
})
export class VcolorListComponent implements OnInit {

  lenght:number
   durationInSeconds = 5;
   displayedColumns: string[] = ['Vcolor','Edit','Delete'];
   dataSource: MatTableDataSource<any>;
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;
  constructor( private api:ApiService, private snackbar:MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  this.getallProducts()
  }
  getallProducts(){
    this.api.gettesting()
   .subscribe({
    next:(res)=>{
     this.dataSource=new MatTableDataSource(res)
     this.dataSource.paginator=this.paginator;
     this.dataSource.sort=this.sort;
    },
    error:(err)=>{
      this.snackbar.open("Error while fetching a Color details")
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
  Logo:string="assets/image/BikeWo-Logo-white.png";
  Ulogo:string="assets/image/icons8-user-40.png"
}
