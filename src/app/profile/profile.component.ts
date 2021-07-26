import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
     firstName: '',
     displayName: '',
     roleText: '',
     aboutYourself: '',
     experience: '',
     areasOfInterest: [],
     isProfessional: false,
     expertise: '',
     lastName: ''
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

  // profileForm: FormGroup = new FormGroup({});
  fb: FormBuilder = new FormBuilder();
  
  constructor(userService: UserService, fb: FormBuilder) {
    this.userService = userService;
  }

  profileForm: FormGroup =new FormGroup({
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

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.initializeForm();
    //   console.log(this.profileForm.value);
    //   console.log(Date.now());
    // }, 50);
    // console.log(Date.now());
    
    // setTimeout(() => {
    //   return;
    // }, 2000);
    this.initializeForm();
    
    // console.log(this.userService.areaOfInterest);
  }

  get areaInterested(){
    return <FormArray>this.profileForm.get('areaInterest');
  }

  get profile(){
    return <FormControl>this.profileForm.get('profileType');
  }

  get expGet(){
    return <FormArray>this.profileForm.get('experienced');
  }

  get expertGet(){
    return <FormArray>this.profileForm.get('expertise');
  }


  initializeForm() {
    this.profileForm.patchValue({
      dname: this.userService.userDetails.displayName,
      fname: this.userService.userDetails.firstName,
      lname: this.userService.userDetails.lastName,
      aboutYou: this.userService.userDetails.aboutYourself,
      profileType: this.userService.userDetails.isProfessional === true ? "1": "0",
      role: this.userService.userDetails.roleText
    });

    let area = <FormArray>this.profileForm.controls.areaInterest;
    this.userService.areaOfInterest.forEach(areaFill => {
      console.log(areaFill);
      area.push(this.fb.array([areaFill]))
    })

    let exp = <FormArray>this.profileForm.controls.experienced;
    this.userService.experience.forEach(expFill => {
      exp.push(this.fb.array([expFill]))
    })

    let expert = <FormArray>this.profileForm.controls.expertise;
    this.userService.expertise.forEach(expFill => {
      expert.push(this.fb.array([expFill]))
    })
    console.log(expert);
  }

  // onChanges() {
  //   this.profileForm.get('profileType')?.valueChanges.subscribe(val => {
  //     console.log(val)
  //   })
  // }


  onSubmit(){
    console.log(this.profileForm);
  }

}
