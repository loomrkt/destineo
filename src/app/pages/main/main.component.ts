import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { FaqComponent } from './faq/faq.component';
import { BrandComponent } from './brand/brand.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [LandingComponent,FaqComponent,BrandComponent,RecommendationComponent,TestimonialComponent,ContactComponent],
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent { }
