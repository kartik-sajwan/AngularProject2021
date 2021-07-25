import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  pageTitle: string = 'Wishlist';
  courseService: CourseService;
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }

  ngOnInit(): void {
  }

}
