import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-side-cart',
  templateUrl: './side-cart.component.html',
  styleUrls: ['./side-cart.component.scss']
})
export class SideCartComponent implements OnInit {

  courseService: CourseService;
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }

  ngOnInit(): void {
  }

}
