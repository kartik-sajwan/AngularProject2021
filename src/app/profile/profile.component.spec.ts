import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //  Custom tests performed on profileForm
  it('form invalid when dname empty', () => {
    let name = component.profileForm.controls['dname'];
    expect(name.valid).toBeFalsy();
  });

  it('form invalid when aboutYou greater than 100 chars', () => {
    let about = component.profileForm.controls['aboutYou'];
    about.setValue("iamironmaniamironmaniamironmaniamironmaniamironmaniamironmaniamironmaniamironmaniamironmaniamironmaniamironmaniamironmaniamironman")
    expect(about.valid).toBeFalsy();
  });

  it('form invalid when fname empty', () => {
    let fname = component.profileForm.controls['fname'];
    fname.setValue("")
    expect(fname.valid).toBeFalsy();
  });


});
