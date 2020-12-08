import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseUrl="http://localhost";
  constructor(private http:HttpClient) { }

  getData():Observable<Students[]>{
    return this.http.get<Students[]>(`${this.baseUrl}/angularphpcrud/read.php`);
  }
  delete(id:number){
    return this.http.delete<Students[]>(`${this.baseUrl}/angularphpcrud/delete.php?id=${id}`);
  }
  create(data:Students):Observable<Students>{
    return this.http.post<Students>(`${this.baseUrl}/angularphpcrud/create.php`,data);
  }
  upById(id:number){
    return this.http.get(`${this.baseUrl}/angularphpcrud/upbyid.php?id=${id}`);
  }
  edit(data:Students){
    return this.http.put(`${this.baseUrl}/angularphpcrud/edit.php`,data);
  }
}
