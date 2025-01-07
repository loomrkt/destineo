import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconBlockComponent } from '../../../components/iconBlock/iconBlock.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [IconBlockComponent, TranslateModule],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent { }
