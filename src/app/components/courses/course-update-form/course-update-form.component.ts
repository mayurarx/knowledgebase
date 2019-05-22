import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-course-update-form',
  templateUrl: './course-update-form.component.html',
  styleUrls: ['./course-update-form.component.scss']
})
export class CourseUpdateFormComponent implements OnInit {

  constructor(public cs: CourseService, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.afs.collection('courses').doc(form.value.id).set(form.value);
    this.cs.selectedCourse.next(null);
    this.cs.displayUpdateForm = false;
  }

  onRemove(courseId: string) {
    this.afs.collection('courses').doc(courseId).delete();
    this.cs.selectedCourse.next(null);
    this.cs.displayUpdateForm = false;
  }
}
