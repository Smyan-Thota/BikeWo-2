import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DealerComponent } from './dealer/dealer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmplyeeListComponent } from './employee/employelist/emplyee-list/emplyee-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InverntryListComponent } from './inventory/inverntry-list/inverntry-list.component';
import { LoginComponent } from './login/login.component';
import { OemPURCHASEListComponent } from './oem-purchase/oem-purchase-list/oem-purchase-list.component';
import { OemPURCHASEComponent } from './oem-purchase/oem-purchase.component';
import { OEMComponent } from './oem/oem.component';
import { OEMListComponent } from './oem/oemlist/oemlist.component';
import { OempurchasePartsComponent } from './oempurchase-parts/oempurchase-parts.component';
import { PurchasePartListComponent } from './oempurchase-parts/purchase-part-list/purchase-part-list.component';

import { DreportsComponent } from './ReportsTables/dreports/dreports.component';
import { UreportsComponent } from './ReportsTables/UserReports/ureports/ureports.component';
import { SalesComponent } from './sales/sales.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { UserLoignComponent } from './user-loign/user-loign.component';
import { UserlistComponent } from './userlist/userlist.component';
import { BatteryspecComponent } from './vehicle/batteryspec/batteryspec.component';
import { VcolorListComponent } from './vehicle/vcolor/vcolor-list/vcolor-list.component';
import { VcolorComponent } from './vehicle/vcolor/vcolor.component';
import { VehicleDetailsListComponent } from './vehicle/vehicle-details-list/vehicle-details-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VservicesListComponent } from './vehicleservice/services list/vservices-list/vservices-list.component';
import { VehicleserviceComponent } from './vehicleservice/vehicleservice.component';


const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'DealreList', component:SidenavComponent},
  {path:'dealer', component:DealerComponent},
  {path:'dealerB', component:SidenavComponent},
  {path:'salesCreation',component:SalesComponent},
  {path:'Vechileservice',component:VehicleserviceComponent},
  {path:'VechileserviceList', component:VservicesListComponent},

  {path:'Ucreation',component:UserlistComponent},
  {path:'uList',component:UserCreationComponent},
  {path:'Reports',component:DreportsComponent},
  {path:'UserReports',component:UreportsComponent},
  {path:'DealerReports',component:DreportsComponent},
  {path:'VserviceList',component:VservicesListComponent},
  {path:'emplyee', component:EmployeeComponent},
  {path:'emplyeeList', component:EmplyeeListComponent},
  {path:'oem',component:OEMComponent},
  {path:'oemList', component:OEMListComponent},
  {path:'purchaseList', component:OemPURCHASEListComponent},
  {path:'OEMpurchase', component:OemPURCHASEComponent},
  {path:'purchasepartList',component:PurchasePartListComponent},
  {path:'purchasepart', component:OempurchasePartsComponent},
  {path:'vehiclecreatedlist',component:VehicleDetailsListComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'colorCreation', component:VcolorComponent},
  {path:'color', component:VcolorListComponent},
  {path:'batterySpec', component:BatteryspecComponent},
  {path:"User", component:UserLoignComponent},
  {path:"InventoryList",component:InverntryListComponent},
  {path:"Inventory", component:InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
