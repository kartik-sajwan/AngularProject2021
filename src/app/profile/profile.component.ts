import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { UserService } from '../services/user.service';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userService: UserService;
  userDetails: {
    id: string,
    firstName: string,
    displayName: string,
    roleText: string,
    aboutYourself: string,
    experience: string,
    areasOfInterest: Array<string>,
    isProfessional: boolean,
    expertise: string,
    lastName: string
   } = {
     id: 'G8oCAXWM1FZL8xLOlQS3',
     firstName: 'Saurabh',
     displayName: 'Saurabh',
     roleText: 'UI developer',
     aboutYourself: 'I am Iron Man',
     experience: '1',
     areasOfInterest: ['1'],
     isProfessional: true,
     expertise: '1',
     lastName: 'Sinha'
   };
   areaOfInterest: Array<{id:string, displayValue: string}> =[];
   experience: Array<{id: string, displayValue: string}> =[];
   expertise: Array<{id:string, displayValue: string}> =[];

  // areaOfInterest: Array<{id:string, displayValue: string}> = [
	// 	{
	// 		"id": "1",
	// 		"displayValue": "designer"
	// 	},
	// 	{
	// 		"id": "2",
	// 		"displayValue": "developer"
	// 	},
	// 	{
	// 		"id": "3",
	// 		"displayValue": "manager"
	// 	},
	// 	{
	// 		"id": "4",
	// 		"displayValue": "sales"
	// 	}
	// ]; 
  // experience: Array<{id: string, displayValue: string}> = [
	// 	{
	// 		"id": "1",
	// 		"displayValue": "0-5"
	// 	},
	// 	{
	// 		"id": "2",
	// 		"displayValue": "5-10"
	// 	},
	// 	{
	// 		"id": "3",
	// 		"displayValue": "> 10"
	// 	}
	// ];
  // expertise: Array<{id:string, displayValue: string}> = [
	// 	{
	// 		"id": "1",
	// 		"displayValue": "java"
	// 	},
	// 	{
	// 		"id": "2",
	// 		"displayValue": "react"
	// 	},
	// 	{
	// 		"id": "3",
	// 		"displayValue": "backend"
	// 	}
	// ]; 

  pageTitle:string = "My Profile";

  profileForm: FormGroup = new FormGroup({});
  fb: FormBuilder = new FormBuilder();
  
  constructor(userService: UserService, fb: FormBuilder) {
    this.userService = userService;
  }


  ngOnInit(): void {

    this.profileForm =new FormGroup({
      'dname': new FormControl(null),
      'fname': new FormControl(null),
      'lname': new FormControl(null),
      'aboutYou': new FormControl(null),
      'areaInterest': this.fb.array([]),
      'profileType': new FormGroup({
        'student': new FormControl(null),
        'professional': new FormControl(null),
      }),
      'additional': new FormGroup({
        'experience': new FormArray([]),
        'expertise': new FormArray([]),
        'role': new FormControl(null)
      })
    });
    // setTimeout(() => {
    //   this.initializeForm();
    //   console.log(this.profileForm.value);
    //   console.log(Date.now());
    // }, 50);
    // console.log(Date.now());
    
    this.initializeForm();
    
    console.log(this.userService.areaOfInterest);
  }

  initializeForm() {
    this.profileForm.patchValue({
      dname: this.userService.userDetails.displayName,
      fname: this.userService.userDetails.firstName,
      lname: this.userService.userDetails.lastName,
      aboutYou: this.userService.userDetails.aboutYourself,
      // profileType: {
      //   student: 0,
      //   professional: 1
      // },
      // additional: {
      //   experience: this.userService.userDetails.experience,
      //   expertise: this.userService.userDetails.experience,
      //   role: this.userService.userDetails.roleText
      // }
    });

    let area = <FormArray>this.profileForm.controls.areaInterest;
    console.log(area);
    this.userService.areaOfInterest.forEach(areaFill => {
      area.push(this.fb.array([() => {
        return this.fb.group({ id: areaFill.id, displayValue: areaFill.displayValue});
      }]))
    })

    // console.log(this.profileForm.get('areaOfInterest').controls);
  }


  onSubmit(){
    console.log(this.profileForm);
  }

}
