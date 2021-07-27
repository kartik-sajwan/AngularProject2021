import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { SideCartComponent} from './side-cart.component';
import { CourseService } from '../services/course.service';

describe('SideCartComponent', () => {
  let component: SideCartComponent;
  let fixture: ComponentFixture<SideCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCartComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [CourseService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
