import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from "@angular/http";
import {NgForm} from '@angular/forms';
import { Subject } from '../../models/subject';

@Component({
  selector: 'adding-subjects',
  templateUrl: './adding-subjects.component.html',
  styleUrls: ['./adding-subjects.component.css']
})

export class AddingSubjectsComponent {

  
    url = "http://to.ttk.elte.hu/test.php";
    subjectName: string;
    result: string;
    headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    constructor(private http: Http) { }

    bodyGetInfo(targynev: string) {
      return {
      'melyik': 'nevalapjan',
      'felev': '2017-2018-2',
      'limit': '-1',
      'targynev': this.subjectName
  }; }

    postData(f) {
      this.subjectName = f.value.subjectName;
        
        let options = new RequestOptions({headers: this.headers});

        return this.http.post(this.url,this.bodyGetInfo(this.subjectName),options)
        .subscribe(res => {
          console.log(res.toString())
        });  
    }

    /*postData(f) {
      this.subjectName = f.value.subjectName;
      return this.http.post(this.url,bodyGetInfo)
      .subscribe(res => {
        console.log(res.toString())
      });
  }*/

}




