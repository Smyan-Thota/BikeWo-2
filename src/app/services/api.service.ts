import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  postProduct(data:any){
 
    return this.http.post<any>("http://localhost:3000/DealerFrom/", data)
  }
  getProduct(){
    return this.http.get<any>("http://localhost:3000/DealerFrom");
  }
   postEmplyProduct(data:any){
     return this.http.post<any>("http://localhost:3000/EmployeeFrom/", data)
  }
  getEmplyProduct(){
    return this.http.get<any>("http://localhost:3000/EmployeeFrom/");
  }
  postOEMproduct(data:any){
 
    return this.http.post<any>("http://localhost:3000/OemFrom/", data)
  }
  getOEMproduct(){
    return this.http.get<any>("http://localhost:3000/OemFrom/");
  }
  postOEMpurchase(data:any){
 
    return this.http.post<any>("http://localhost:3000/OEMPURCHASEFrom/", data)
  }
  getOEMPurchaselist(){
    return this.http.get<any>("http://localhost:3000/OEMPURCHASEFrom");
  }
  postOEMpurchaseParts(data:any){
 
    return this.http.post<any>("http://localhost:3000/OEMPURCHASEFparts/", data)
  }
  getOEMPurchasepartlist(){
    return this.http.get<any>("http://localhost:3000/OEMPURCHASEFparts");
  }
  
  postVehicle(data:any){
 
    return this.http.post<any>("http://localhost:3000/Vehicle/", data)
  }
  getVehicle(){
    return this.http.get<any>("http://localhost:3000/Vehicle");
  }
   
postTesting(data:any){
  return this.http.post<any>("http://localhost:300/testingobject", data)
}
gettesting(){
  return this.http.get<any>("http://localhost:3000/testingobject");
}
  postEProduct(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/DealerFrom/"+id, data)
  }
  deletproduct(id:any){
    return this.http.delete<any>("http://localhost:3000/DealerFrom/"+id);
  }
  postEmProduct(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/EmployeeFrom/"+id, data)
  }
  deletEmproduct(id:any){
    return this.http.delete<any>("http://localhost:3000/EmployeeFrom/"+id);
  }
  postOEMcreation(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/OemFrom/"+id, data)
  }
  deletOEMcreation(id:any){
    return this.http.delete<any>("http://localhost:3000/OemFrom/"+id);
  }
  postEpurchaseProduct(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/OEMPURCHASEFrom/"+id, data)
  }
  deletEpurchaseProduct(id:any){
    return this.http.delete<any>("http://localhost:3000/OEMPURCHASEFrom/"+id);
  }
  postPparts(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/OEMPURCHASEFparts/"+id, data);
  }deletPparts(id:any){
    return this.http.delete<any>("http://localhost:3000/OEMPURCHASEFparts/"+id);
  }
  postInventry(data:any){
    return this.http.put<any>("http://localhost:3000/Invertory", data)
  }
  getInventry(){
    return this.http.get<any>("http://localhost:3000/Invertory")
  }
}


