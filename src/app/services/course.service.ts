import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})

export class CourseService {

  courses: Array<{id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}> = [];

  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
    this.httpClient.get("./assets/dataStore/courses.json").subscribe((response: any = []) => {
      this.courses = response.courses;
    })
  }

  getCourses() {
    console.log(this.courses[0]);
  }

  addToCart(id: string){
    console.log(id);
  }


}
