import { Injectable, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Courses interface defines structure of object obtained from api
export interface courses {
  id:string, 
  courseCreator: string, 
  courseDescription: string, 
  discount: number, 
  discountValidTill: Date, 
  price: number, 
  tags: Array<string>, 
  title:string
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
// This service handles all course, wihslist and cart related operation 


  //  Variables declared here
  courses: Array<courses> = [];
  inCart: Array<courses> = [];
  inWishlist: Array<courses> = [];
  searchResults: Array<courses> = [];

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

  // Function to find price of course after considering discount percentage
  findPrice(course: courses){
    return (course.price - (course.discount * course.price /100));
  }

  //  Function to sort courses on all course page 
  sortChange(event: Event){
    //  Sort low to high
    this.sort = (<HTMLTextAreaElement>event.target).value;
      this.courses.sort( (course_a, course_b) => {
        if(this.findPrice(course_a) > this.findPrice(course_b))
          return 1;
        else if (this.findPrice(course_a) < this.findPrice(course_b))
          return -1;
        return 0;
      })
      //  Reverse if high to low
      if(this.sort === "high"){
        this.courses.reverse();
      }

  }
  
  //  Function to search courses on all course page
  searchCourses(event: Event){
    this.searchTerm = (<HTMLTextAreaElement>event.target).value;
    this.searchTerm = this.searchTerm.toLowerCase();
    
    this.searchResults = this.courses.filter(course => {
      if(course.title.toLowerCase().includes(this.searchTerm)){
        return course;
      }
      else if (course.tags.includes(this.searchTerm)){
        return course;
      }
      else if (course.courseDescription.includes(this.searchTerm)){
        return course;
      }
      return null;
    });
    console.log(this.searchResults);
  }

  //  Function to add courses to cart
  addToCart(course: courses){
    if(this.inCart.indexOf(course) !== -1){
      alert("Already exists in the cart");
      return;
    }
    if(this.inWishlist.indexOf(course) !== -1){
      this.removeWishlisted(course);
    }
      this.inCart.push(course);
      this.cartValue += this.findPrice(course);
      this.totalSavings += (course.discount * course.price /100);
      this.inCartCount++;
      alert("Course successfully added in the cart");
  }

  //  Function to add courses to wishlist
  addToWishlist(course: courses){
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

  //  Function to check if a course is in wishlist
  isInWishlist(course: courses): boolean{
    if(this.inWishlist.indexOf(course) !== -1){
      return true;
    }
    return false;
  }

  //  Function to remove course from wishlist
  removeWishlisted(course: courses){
    if(this.inWishlist.length == 1){
      this.inWishlist.splice(this.inWishlist.length-1, 1);
    }
    else {
      this.inWishlist.splice(this.inWishlist.indexOf(course),1);
    }
  }

  //  function to remove course from cart
  removeCarted(course: courses){
    if(this.inCart.length == 1){
      this.inCart.splice(this.inCart.length-1, 1);
    }
    else {
      this.inCart.splice(this.inCart.indexOf(course), 1);
    }
    this.inCartCount--;
    this.cartValue -= this.findPrice(course); 
    this.totalSavings -= (course.discount * course.price /100);   
    this.cartValue = this.cartValue >> 0; //Round to zero using right shift
  }

  //  function to move course from cart to wishlist
  moveToWishlist(course: courses){
      this.removeCarted(course);
      this.inWishlist.push(course);
      alert("Course successfully added in the wishlist");
  }

  //  function to place order and checkout
  placeOrder(){
    if(this.inCartCount){ 
      alert("Your order has been placed successfully");
      location.reload();      
    }
      
  }
}
