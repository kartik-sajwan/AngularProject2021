import { Injectable, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
// import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})

export class CourseService {

  courses: Array<{id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}> = [];
  inCart: Array<{id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}> = [];
  inWishlist: Array<{id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}> = [];
  searchResults: Array<{id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}> = [];

  page: number = 0;
  cartValue: number = 0;
  inCartCount: number = 0;
  chosenSort: string = "";
  totalSavings: number = 0;
  sort: string = '';
  searchTerm: string = '';
  private router: Router;
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient, router: Router) { 
    this.router = router;
    this.httpClient = httpClient;
    this.httpClient.get("./assets/dataStore/courses.json").subscribe((response: any = []) => {
      this.courses = response.courses;
    })
  }

  findPrice(course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}){
    return (course.price - (course.discount * course.price /100));
  }
  sortChange(event: Event){
    
    this.sort = (<HTMLTextAreaElement>event.target).value;
      this.courses.sort( (course_a, course_b) => {
        if(this.findPrice(course_a) > this.findPrice(course_b))
          return 1;
        else if (this.findPrice(course_a) < this.findPrice(course_b))
          return -1;
        return 0;
      })
      if(this.sort === "high"){
        this.courses.reverse();
      }

  }
  
  searchCourses(event: Event){
    this.searchTerm = (<HTMLTextAreaElement>event.target).value;
    this.searchResults = this.courses.filter(course => {
      if(course.title.includes(this.searchTerm)){
        return course;
      }
      else if (course.tags.includes(this.searchTerm)){
        return course;
      }
      else if (course.courseDescription.includes(this.searchTerm)){
        return course;
      }
      return;
    });
    console.log(this.searchResults);
  }

  addToCart(course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}){
    if(this.inCart.indexOf(course) !== -1){
      alert("Already exists in the cart");
      return;
    }
    if(this.inWishlist.indexOf(course) !== -1){
      this.removeWishlisted(course);
    }
      this.inCart.push(course);
      this.cartValue += (course.price - (course.discount * course.price /100));
      this.totalSavings += (course.discount * course.price /100);
      this.inCartCount++;
      alert("Course successfully added in the cart");
  }

  addToWishlist(course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}){
    if(this.inCart.indexOf(course) !== -1){
      alert("Item already in Cart.");
      return;
    }
    if(this.inWishlist.indexOf(course) !== -1){
      alert("Item already in Wishlist.");
    }
    else{
      this.inWishlist.push(course);
      alert("Course successfully added in the wishlist");
    }
  }

  isInWishlist(course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}): boolean{
    if(this.inWishlist.indexOf(course) !== -1){
      return true;
    }
    return false;
  }


  removeWishlisted(course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}){
    if(this.inWishlist.length == 1){
      this.inWishlist.splice(this.inWishlist.length-1, 1);
    }
    else {
      this.inWishlist.splice(this.inWishlist.indexOf(course),1);
    }
  }

  removeCarted(course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}){
    if(this.inCart.length == 1){
      this.inCart.splice(this.inCart.length-1, 1);
    }
    else {
      this.inCart.splice(this.inCart.indexOf(course), 1);
    }
    this.inCartCount--;
    this.cartValue = this.cartValue - (course.price - (course.discount * course.price /100)); 
    this.totalSavings -= (course.discount * course.price /100);   
    this.cartValue = this.cartValue >> 0; //Round to zero using right shift
  }

  moveToWishlist(course: {id:string, courseCreator: string, courseDescription: string, discount: number, discountValidTill: Date, price: number, tags: Array<string>, title:string}){
      this.removeCarted(course);
      this.inWishlist.push(course);
      alert("Course successfully added in the wishlist");
  }

  placeOrder(){
    if(this.inCartCount){ 
      alert("Your order has been placed successfully");
      location.reload();
    }
      
  }
}
