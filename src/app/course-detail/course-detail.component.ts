import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}
  = {
    id : '',
    courseCreator : '',
    courseDescription :'',
    discount : 0,
    discountValidTill : new Date(),
    price : 0,
    tags : [''],
    title : ''
  };
  pageTitle: string = 'Discover Latest Courses on React';
  constructor() { }

  ngOnInit(): void {
  }

}
