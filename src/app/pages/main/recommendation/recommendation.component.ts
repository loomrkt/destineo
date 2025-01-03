import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [],
  templateUrl: './recommendation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationComponent { }
