import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { CoursesService } from '../services/courses.service';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

export function courseTitleValidator(courses: CoursesService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value?.trim()?.toLowerCase();

    if (!value) {
      return of(null);
    }

    return courses.findAllCourses().pipe(
      map((courses): ValidationErrors | null => {
        const course = courses.find((course) => course.description.toLowerCase() === value);

        return course ? { titleExists: true } : null;
      })
    );
  };
}
