import { Component, OnInit,Input } from '@angular/core';
import { courses, CourseService } from '../services/course.service';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  course: courses =
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

  pageTitle: string = 'Discover Latest Courses on React';
  courseService: CourseService;

  constructor(private router:Router, private activatedRoute:ActivatedRoute, courseService: CourseService) {
    this.courseService = courseService;
  }

  ngOnInit(): void {
    this.course = history.state;
  }

}
