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
import { UserService } from './services/user.service';
import { SideCartItemComponent } from './side-cart-item/side-cart-item.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes = [
  {path: '', component: AllCoursesComponent, pathMatch : 'full'},
  {path: 'all-courses', component: AllCoursesComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'cart', component: CartComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course-details', component:CourseDetailComponent, pathMatch: 'full'},
  {path: 'search', component: SearchResultsComponent },
  
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
    CartComponent,
    ProfileComponent,
    CourseDetailComponent,
    SearchResultsComponent
  ],
  exports: [
    CourseItemComponent,
    NavigationComponent,
    BannerComponent,
    AllCoursesComponent,
    SearchSortComponent,
    CourseListComponent,
    SideCartComponent,
    CourseItemComponent,
    SideCartItemComponent,
    WishlistComponent,
    CartComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CourseService,
    UserService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
