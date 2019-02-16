import {COURSES} from '../db-data';
import { Component, Input } from '@angular/core';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

courses = COURSES;

title = COURSES[1].description;

price = 9.99564654;

rate = 0.67;

course = COURSES[1];

startDate = new Date(2000, 0, 1);

  onCourseSelected(course:Course) {

    console.log("App component - click event bubbled....", course);

  }
}
