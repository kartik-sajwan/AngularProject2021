import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//  Interface fir the structure of user data received from the api
export interface userDetails {
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
 }

@Injectable({
  providedIn: 'root'
})
export class UserService {
// This service handles all user profile related operation 

  userDetails: userDetails = {
     id: '',
     firstName: '',
     displayName: '',
     roleText: '',
     aboutYourself: '',
     experience: "",
     areasOfInterest: [""],
     isProfessional: false,
     expertise: "",
     lastName: ''
   };

   areaOfInterest: Array<{id:string, displayValue: string}> =[];
   experience: Array<{id: string, displayValue: string}> =[];
   expertise: Array<{id:string, displayValue: string}> =[];
  

  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) { 
    this.httpClient = httpClient;
    this.fetchData();
  }

  //  Function to fetch user data from API
  fetchData() {
    this.httpClient.get("./assets/dataStore/user-details.json").subscribe((response: any = []) => {
      this.userDetails = response.user;
    })
    this.httpClient.get("./assets/dataStore/interest-area.json").subscribe((response: any = []) => {
      this.areaOfInterest = response.area;
    })
    this.httpClient.get("./assets/dataStore/experience.json").subscribe((response: any = []) => {
      this.experience = response.experience;
    })
    this.httpClient.get("./assets/dataStore/expertise.json").subscribe((response: any = []) => {
      this.expertise = response.expertise;
    })
  }
}
