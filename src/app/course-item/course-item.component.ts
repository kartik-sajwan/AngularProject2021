import { Component, Input, OnInit} from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}
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
  @Input() typeOfCard:number = 0;
  courseService: CourseService;
  @Input() index:number = 0;
  
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }
  ngOnInit(): void {
  }
}
