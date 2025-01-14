import { ChangeDetectionStrategy, Component} from '@angular/core';
import { DropdownLanguageComponent } from '../../../components/dropdown-language/dropdown-language.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropdownLanguageComponent, RouterLink, TranslateModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent{
}
