import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-side-cart-item',
  templateUrl: './side-cart-item.component.html',
  styleUrls: ['./side-cart-item.component.scss']
})
export class SideCartItemComponent implements OnInit {
  @Input() index: number = 0;
  
  courseService: CourseService;
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }

  ngOnInit(): void {
  }

}
