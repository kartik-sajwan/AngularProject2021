import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss']
})
export class AllCoursesComponent implements OnInit {

  allCourses: string = 'All Courses';
  pageTitle: string = 'Discover Latest Courses on React';

  courseService: CourseService;
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }

  ngOnInit(): void { }

}
