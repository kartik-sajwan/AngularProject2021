import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BannerComponent } from './banner/banner.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { SearchSortComponent } from './search-sort/search-sort.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SideCartComponent } from './side-cart/side-cart.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseService } from './services/course.service';
import { SideCartItemComponent } from './side-cart-item/side-cart-item.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';

const routes = [
  {path: '', component: AllCoursesComponent},
  {path: 'all-courses', component: AllCoursesComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'cart', component: CartComponent},
  {path: 'profile', component: AllCoursesComponent},
  
  {path: '**', component: AllCoursesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BannerComponent,
    AllCoursesComponent,
    SearchSortComponent,
    CourseListComponent,
    SideCartComponent,
    CourseItemComponent,
    SideCartItemComponent,
    WishlistComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
