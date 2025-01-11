import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './recommendation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationComponent { }
