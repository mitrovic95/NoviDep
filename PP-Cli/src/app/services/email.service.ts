import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Email } from 'src/app/model/email';

  @Injectable({
    providedIn: 'root'
  })
  export class EmailService {

    // public email: Subject<Email[]> = new Subject();
    private path = '/api/mail';
    private header = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) { }

  sendMail(email: Email): Observable<Email> {
      return this.http.put(`${this.path}`, email, {headers: this.header}) as Observable<Email>;
    }
}
