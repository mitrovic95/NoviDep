import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Osoba } from './../model/osoba';

@Injectable({
  providedIn: 'root'
})
export class OsobeService {

  public osobe: Subject<Osoba[]> = new Subject();
  private path = '/api/osoba';
  private header = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getOsobe(): Observable<Osoba[]> {
    return this.http.get(this.path) as Observable<Osoba[]>;
  }

//   getCompany(id: number): Observable<Company> {
//     // console.log('JEDAN USER ID', id);
//     return this.http.get(`${this.path}/${id}`) as Observable<Company>;
//   }

//   deleteCompany(company: Company) {
//     return this.http.delete(`${this.path}/${company.id}`);
//   }

//   saveCompany(company: Company): Observable<Company> {
//     if (company.id === undefined) {
//       return this.http.post(this.path, company, {headers: this.header}) as Observable<Company>;
//     }
//     else {
//       return this.http.put(`${this.path}/${company.id}`, company, {headers: this.header}) as Observable<Company>;
//     }
//   }

//   getCompanyByName(name: string): Observable<Company[]>  {
//    return this.http.get(this.path + '?name=' + name) as Observable<Company[]>;
//   }
// }
}
