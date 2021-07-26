import { Component, Input, NgModule, NO_ERRORS_SCHEMA, OnInit, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss']
})
export class CourseItemComponent implements OnInit {

  @Input() course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}
  = {
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
    private viewcontref: ViewContainerRef,
    private compfactresol: ComponentFactoryResolver,
    courseService: CourseService
  ) {this.courseService = courseService;}

  ngOnInit(): void {
  }

  loadCourseDetails() {
    import('../course-detail/course-detail.component').then(({CourseDetailComponent})=>{
      this.viewcontref.clear();
      const cmp=this.compfactresol.resolveComponentFactory(CourseDetailComponent);
      const courseDetail=this.viewcontref.createComponent(cmp);
      courseDetail.instance.course = this.course;
    });
  }
}
