import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [],
  templateUrl: './testimonial.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent { }
