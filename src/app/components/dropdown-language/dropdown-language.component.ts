import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdown-language',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-language.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownLanguageComponent implements OnInit{ 
  translate : TranslateService = inject(TranslateService);
  ngOnInit(): void {
    if(typeof localStorage != 'undefined')
    {
      const storedLanguage: string | null = localStorage.getItem('lang');
      if(storedLanguage)
      {
        this.translate.use(storedLanguage);
      }
      else
      {
        this.translate.use('fr');
      }
    }
  }

  translateText(lang : string)
  {
    this.translate.use(lang);
    if(typeof localStorage != 'undefined')
      {
      localStorage.setItem('lang', lang);
      }
  }
}
