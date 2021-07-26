import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
//  This component controls profile page

  userService: UserService;
  areaOfInterest: Array<{id:string, displayValue: string}> =[];
  experience: Array<{id: string, displayValue: string}> =[];
  expertise: Array<{id:string, displayValue: string}> =[];

  pageTitle:string = "My Profile";


  fb: FormBuilder = new FormBuilder();
  profileForm: FormGroup = new FormGroup({});

  constructor(userService: UserService, fb: FormBuilder) {
    this.userService = userService;
  }
  
  ngOnInit(): void {

    //  Defining structure of reactive form

    this.profileForm = new FormGroup({
      'dname': new FormControl(null, [Validators.required]),
      'fname': new FormControl(null, [Validators.required]),
      'lname': new FormControl(null),
      'aboutYou': new FormControl(null, [Validators.maxLength(100)]),
      'areaInterest': this.fb.array([]),
      'profileType': new FormControl(null),
      'experienced': new FormArray([]),
      'expertise': new FormArray([]),
      'role': new FormControl(null)
    });

    //  Initialize form 
    this.initializeForm();
  }


  //  Getter methods for form controls
  get areaInterested(){    return <FormArray>this.profileForm.get('areaInterest');  }
  get profile(){    return <FormControl>this.profileForm.get('profileType');  }
  get expGet(){    return <FormArray>this.profileForm.get('experienced');  }
  get expertGet(){    return <FormArray>this.profileForm.get('expertise');  }

//  Initialise form function
  initializeForm() {
    this.profileForm.patchValue({
      dname: this.userService.userDetails.displayName,
      fname: this.userService.userDetails.firstName,
      lname: this.userService.userDetails.lastName,
      aboutYou: this.userService.userDetails.aboutYourself,
      profileType: this.userService.userDetails.isProfessional === true ? "1": "0",
      role: this.userService.userDetails.roleText
    });

    //  initialize formArray areaInterest
    let area = this.areaInterested;
    this.userService.areaOfInterest.forEach(areaFill => {
      area.push(this.fb.array([areaFill]))
    })
    //  initialize formArray experience
    let exp = this.expGet;
    this.userService.experience.forEach(expFill => {
      exp.push(this.fb.array([expFill]))
    })
    //  initialize formArray expertise
    let expert = this.expertGet;
    this.userService.expertise.forEach(expFill => {
      expert.push(this.fb.array([expFill]))
    })
  }

  //  This function is called on submit form   ***does not store values for checkbox and radio buttons***  !!! Incomplete !!! 
  onSubmit(){
    this.userService.userDetails.displayName = this.profileForm.value.dname;
    this.userService.userDetails.firstName = this.profileForm.value.fname;
    this.userService.userDetails.lastName = this.profileForm.value.lname;
    this.userService.userDetails.aboutYourself = this.profileForm.value.aboutYou;
    this.userService.userDetails.isProfessional = this.profileForm.value.profileType === 1 ? true : false;
    this.userService.userDetails.roleText = this.profileForm.value.role;
  }

}
