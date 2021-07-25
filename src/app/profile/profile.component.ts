import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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
  areaOfInterest: Array<{id:string, displayValue: string}> = [
		{
			"id": "1",
			"displayValue": "designer"
		},
		{
			"id": "2",
			"displayValue": "developer"
		},
		{
			"id": "3",
			"displayValue": "manager"
		},
		{
			"id": "4",
			"displayValue": "sales"
		}
	]; 
  experience: Array<{id: string, displayValue: string}> = [
		{
			"id": "1",
			"displayValue": "0-5"
		},
		{
			"id": "2",
			"displayValue": "5-10"
		},
		{
			"id": "3",
			"displayValue": "> 10"
		}
	];
  expertise: Array<{id:string, displayValue: string}> = [
		{
			"id": "1",
			"displayValue": "java"
		},
		{
			"id": "2",
			"displayValue": "react"
		},
		{
			"id": "3",
			"displayValue": "backend"
		}
	]; 

  pageTitle:string = "My Profile";

  profileForm: FormGroup = new FormGroup({});

  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
    this.httpClient.get("./assets/dataStore/user-details.json").subscribe((response: any = []) => {
      this.userDetails = response.user;
      console.log("userdetails");
      console.log(this.userDetails);
    })
    this.httpClient.get("./assets/dataStore/interest-area.json").subscribe((response: any = []) => {
      this.areaOfInterest = response.area;
      console.log("area");
      console.log(this.areaOfInterest);
    })
    this.httpClient.get("./assets/dataStore/experience.json").subscribe((response: any = []) => {
      this.experience = response.experience;
      console.log("exp");
      console.log(this.experience);
    })
    this.httpClient.get("./assets/dataStore/expertise.json").subscribe((response: any = []) => {
      this.expertise = response.expertise;
      console.log("expert");
      console.log(Date.now());
      console.log(this.expertise);
    })
  }


  ngOnInit(): void {

    this.profileForm =new FormGroup({
      'dname': new FormControl(null),
      'fname': new FormControl(null),
      'lname': new FormControl(null),
      'aboutYou': new FormControl(null),
      'areaInterest': new FormArray([]),
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
    
    
  }

  initializeForm() {
    this.profileForm.setValue({
      dname: this.userDetails.displayName,
      fname: this.userDetails.firstName,
      lname: this.userDetails.lastName,
      aboutYou: this.userDetails.aboutYourself,
      areaInterest: this.areaOfInterest,
      profileType: {
        student: 0,
        professional: 1
      },
      additional: {
        experience: this.experience,
        expertise: this.experience,
        role: this.userDetails.roleText
      }
    });
  }

  onSubmit(){
    this.initializeForm();
    console.log(this.profileForm);
  }

}
