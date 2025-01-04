import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdown-language',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-language.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownLanguageComponent { 
  translate : TranslateService = inject(TranslateService);
  translateText(lang : string)
  {
    this.translate.use(lang);
  }
}
