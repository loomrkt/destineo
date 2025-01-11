import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './testimonial.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialComponent { }
