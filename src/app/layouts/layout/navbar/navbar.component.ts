import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownLanguageComponent } from '../../../components/dropdown-language/dropdown-language.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropdownLanguageComponent, RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
