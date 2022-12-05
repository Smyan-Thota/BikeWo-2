import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {

  DealerName: any;
  position: number;
  contact: number;
  Email:string;
  address:string;
 
}
const DealerComponent: PeriodicElement[] = [
  {position: 1, DealerName: 'Raju', contact:90340994848, Email: 'raju@gmail.com',address:'Hyd' },
  {position: 2, DealerName: 'prakesh', contact:90340994848, Email: 'roja@gmail.com',address:'Hyd' },
  {position: 3, DealerName: 'suresh',contact:90340994848, Email: 'prakesh@gmail.com', address:'Hyd'  },
  {position: 5, DealerName: 'Madhu', contact:90340994848, Email: 'raju@gmail.com',address:'Hyd'  },
   {position: 6, DealerName: 'roja', contact:90340994848, Email: 'Uday.123@gmail.com',address:'Hyd' },


];
@Component({
  selector: 'app-ureports',
  templateUrl: './ureports.component.html',
  styleUrls: ['./ureports.component.css']
})
export class UreportsComponent implements OnInit {
  DealerComponent: string[] = ['position', 'name', 'contact', 'Email','address'];
  dataSource = DealerComponent;
  constructor() { }
  DealerCount:number=0;
  DealerCountstop:any=setInterval(()=>{
    this.DealerCount++;
    if(this.DealerCount==6){
        clearInterval(this.DealerCountstop);
    }
  },1000)
  ngOnInit(): void {
  }
  excelicon:string='assets/image/icons8-microsoft-excel (1).svg'
}
