import { Component, OnInit, OnChanges, EventEmitter, Input,} from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-search-sort',
  templateUrl: './search-sort.component.html',
  styleUrls: ['./search-sort.component.scss']
})
export class SearchSortComponent implements OnInit {

  allCourses: string = "All Courses";
  courseService: CourseService;
  @Input() pageTitle: string = '';
  @Input() typeOfCard: number = 0;
  constructor(courseService: CourseService) { 
    this.courseService = courseService;
  }

  ngOnInit(): void {
  }

}
