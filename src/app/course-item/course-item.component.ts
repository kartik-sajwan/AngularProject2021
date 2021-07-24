import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  
  @Input() index:number = 0;
  courseService: CourseService;
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }
  ngOnInit(): void {
  }

}
