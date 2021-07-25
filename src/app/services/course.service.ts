import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
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

  private router: Router;
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient, router: Router) { 
    this.router = router;
    this.httpClient = httpClient;
    this.httpClient.get("./assets/dataStore/courses.json").subscribe((response: any = []) => {
      this.courses = response.courses;
    })
  }

  sortChange(){}
  //     this.courses.sort( (course_a, course_b) => {
  //       if((course_a.price - (course_a.discount * course_a.price/100)) > (course_b.price = (course_b.discount * course_b.price/100))){
  //         return 1;
  //       }
  //       else if((course_a.price - (course_a.discount * course_a.price/100)) < (course_b.price = (course_b.discount * course_b.price/100))){
  //         return -1;
  //       }
  //       return 0;
  //     })

  //     // if(sort === "low"){
  //     //   this.courses.reverse();
  //     // }
  // }

  searchCourses(key: string){
    this.searchResults = this.courses.filter(course => course.tags[0] == key);
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
