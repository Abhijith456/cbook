import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class DataService {

  /*contacts:Contact[]=[
    {cid:'1001',fullName:"Abhijith",email:"abhi@gmail.com",mobile:"9876543210",deptName:"cse"},
    {cid:'1002',fullName:"Shiwani",email:"shiwani@gmail.com",mobile:"9876543211",deptName:"ise"},
    {cid:'1003',fullName:"Aswathi",email:"ashwathi@gmail.com",mobile:"9876543212",deptName:"cse"},
    {cid:'1004',fullName:"Suppi",email:"suppi@gmail.com",mobile:"9876543213",deptName:"cse"},
    {cid:'1005',fullName:"Anusha",email:"anusha@gmail.com",mobile:"9876543214",deptName:"cse"},
    {cid:'1006',fullName:"Gokul",email:"gokul@gmail.com",mobile:"9876543215",deptName:"cse"},
    {cid:'1007',fullName:"Vimoch",email:"vimoch@gmail.com",mobile:"987654326",deptName:"cse"}

  
  ];*/

  constructor(private http: HttpClient) { }
  getContactData(): Observable<Contact[]> {
    return this.http.get<Contact[]>("https://abhicbook.herokuapp.com/contacts/");
  }
}
