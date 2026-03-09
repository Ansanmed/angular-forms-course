import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from '../../services/courses.service';
import { courseTitleValidator } from '../../validators/course-title-validator';

@Component({
  selector: 'create-course-step-1',
  templateUrl: './create-course-step-1.component.html',
  styleUrls: ['./create-course-step-1.component.scss'],
  standalone: false,
})
export class CreateCourseStep1Component implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly coursesService = inject(CoursesService);

  form = this.fb.group({
    title: [
      '',
      {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(60)],
        asyncValidators: [courseTitleValidator(this.coursesService)],
        updateOn: 'blur',
      },
    ],
    releasedAt: [new Date(), Validators.required],
    downloadAvailable: [false, Validators.requiredTrue],
    longDescription: ['', [Validators.required, Validators.minLength(3)]],
  });

  ngOnInit() {}

  get courseTitle() {
    return this.form.controls['title'];
  }
}
