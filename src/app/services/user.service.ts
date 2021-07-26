import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {

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
     firstName: 's',
     displayName: 's',
     roleText: 's',
     aboutYourself: 's',
     experience: "1",
     areasOfInterest: ["1"],
     isProfessional: false,
     expertise: "1",
     lastName: 's'
   };

  //  areaOfInterest: Array<{id:string, displayValue: string}> =[];
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
  //  experience: Array<{id: string, displayValue: string}> =[];
  //  expertise: Array<{id:string, displayValue: string}> =[];
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

  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
    this.httpClient.get("./assets/dataStore/user-details.json").subscribe((response: any = []) => {
      this.userDetails = response.user;
      // console.log("userdetails");
      // console.log(this.userDetails);
    })
    this.httpClient.get("./assets/dataStore/interest-area.json").subscribe((response: any = []) => {
      this.areaOfInterest = response.area;
      // console.log("area");
      // console.log(this.areaOfInterest);
    })
    this.httpClient.get("./assets/dataStore/experience.json").subscribe((response: any = []) => {
      this.experience = response.experience;
      // console.log("exp");
      // console.log(this.experience);
    })
    this.httpClient.get("./assets/dataStore/expertise.json").subscribe((response: any = []) => {
      this.expertise = response.expertise;
      // console.log("expert");
      // console.log(Date.now());
      // console.log(this.expertise);
    })
  }

}
