import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBlockComponent } from '../../../components/iconBlock/iconBlock.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [IconBlockComponent],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent { }
