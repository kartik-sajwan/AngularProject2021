import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courseService: CourseService;
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }

  ngOnInit(): void {
  }

}
