import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent { }
