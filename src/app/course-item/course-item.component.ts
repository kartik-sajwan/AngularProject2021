import { Component, Input, NgModule, NO_ERRORS_SCHEMA, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { courses, CourseService } from '../services/course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: courses =
   {
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
  @Input() index:number = 0;

  courseService: CourseService;

  constructor(
    private router : Router,
    courseService: CourseService
  ) {this.courseService = courseService;}

  ngOnInit(): void {
  }

  loadCourseDetails() {
    this.router.navigateByUrl('/course-details', {state: this.course});
  }
}
