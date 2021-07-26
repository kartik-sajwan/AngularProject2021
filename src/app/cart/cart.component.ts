import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  pageTitle:string = 'Shopping Cart';
  courseService: CourseService;
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }

  ngOnInit(): void {
  }

}
