import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { InventoryComponent } from './inventory/inventory.component';
import{MatButtonModule}from'@angular/material/button';
import{MatGridListModule}from '@angular/material/grid-list';
import{MatCardModule}from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { VservicesListComponent } from './vehicleservice/services list/vservices-list/vservices-list.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DealerComponent} from './dealer/dealer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DealerListComponent } from './dealer-list/dealer-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';
import { VehicleserviceComponent } from './vehicleservice/vehicleservice.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import {MatDialogModule, MatDialogConfig} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { UserlistComponent } from './userlist/userlist.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReportsComponent } from './reports/reports.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DreportsComponent } from './ReportsTables/dreports/dreports.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { UreportsComponent } from './ReportsTables/UserReports/ureports/ureports.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmplyeeListComponent } from './employee/employelist/emplyee-list/emplyee-list.component';
import { OEMComponent } from './oem/oem.component';
import { OEMListComponent } from './oem/oemlist/oemlist.component';
import {MatTreeModule} from '@angular/material/tree';
import { OemPURCHASEComponent } from './oem-purchase/oem-purchase.component';
import { OemPURCHASEListComponent } from './oem-purchase/oem-purchase-list/oem-purchase-list.component';
import { OempurchasePartsComponent } from './oempurchase-parts/oempurchase-parts.component';
import { PurchasePartListComponent } from './oempurchase-parts/purchase-part-list/purchase-part-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleDetailsListComponent } from './vehicle/vehicle-details-list/vehicle-details-list.component';
import { VcolorComponent } from './vehicle/vcolor/vcolor.component';
import { VcolorListComponent } from './vehicle/vcolor/vcolor-list/vcolor-list.component';
import { DealerEditComponent } from './dealer-list/dealer-edit/dealer-edit.component';
import { EmpeditComponent } from './employee/employelist/empedit/empedit.component';
import { OemeditComponent } from './oem/oemlist/oemedit/oemedit.component';
import { OempurchaseeditComponent } from './oem-purchase/oem-purchase-list/oempurchaseedit/oempurchaseedit.component';
import { PartseditComponent } from './oempurchase-parts/purchase-part-list/partsedit/partsedit.component';
import { VehicleeditComponent } from './vehicle/vehicle-details-list/vehicleedit/vehicleedit.component';
import { BatteryspecComponent } from './vehicle/batteryspec/batteryspec.component';
import { UserLoignComponent } from './user-loign/user-loign.component';
import { InverntryListComponent } from './inventory/inverntry-list/inverntry-list.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DealerComponent,
        DealerListComponent,
        SidenavComponent,
        NavbarComponent,
        SalesComponent,
        VehicleserviceComponent,
        UserCreationComponent,
        UserlistComponent,
        ReportsComponent,
        VservicesListComponent,
        InventoryComponent,
       DreportsComponent,
      UreportsComponent,
      EmployeeComponent,
      EmplyeeListComponent,
      OEMComponent,
      OEMListComponent,
      OemPURCHASEComponent,
      OemPURCHASEListComponent,
      OempurchasePartsComponent,
      PurchasePartListComponent,
      VehicleComponent,
      VehicleDetailsListComponent,
      VcolorComponent,
      VcolorListComponent,
      DealerEditComponent,
      EmpeditComponent,
      OemeditComponent,
      OempurchaseeditComponent,
      PartseditComponent,
      VehicleeditComponent,
      BatteryspecComponent,
      UserLoignComponent,
      InverntryListComponent,
 
    
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatGridListModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        MatListModule,
        MatMenuModule,
        MatToolbarModule,
        OverlayModule,
        MatSelectModule,
        MatTableModule,
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
  
        HttpClientModule,
        MatBottomSheetModule,
        MatSlideToggleModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ToastrModule.forRoot(),
        MatSnackBarModule,
        MatPaginatorModule,
        MatTreeModule,
     
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
