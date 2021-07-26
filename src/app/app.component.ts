import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HUAngularProject2021';
  constructor(private router: Router) {}

  ngOnInit() {
    //  Route to root whenever page loads
    this.router.navigate([''])
  }
}
