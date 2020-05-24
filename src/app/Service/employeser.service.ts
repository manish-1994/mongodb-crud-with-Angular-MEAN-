import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmployeeMdel} from '../Model/employee-mdel';
import {Router} from '@angular/router';


const url = 'http://localhost:3000/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeserService {

  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
    return this.http.get<EmployeeMdel>(url);
  }

  addPost(postdata: EmployeeMdel): Observable<EmployeeMdel> {
    return this.http.post<EmployeeMdel>(url, postdata);
  }

  updatePost(emp: EmployeeMdel, id : any): Observable<any> {
    return this.http.put( url + `/${id}`, emp);
  }

 deletePost(id: any) {
return this.http.delete(url + `/${id}`);
 }

}
