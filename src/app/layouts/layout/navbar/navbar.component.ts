import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DropdownLanguageComponent } from '../../../components/dropdown-language/dropdown-language.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';
import { SharedService } from '../../../service/shared.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropdownLanguageComponent, RouterLink, TranslateModule],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit{
  @ViewChild('menu', {static: true}) menu! : ElementRef<HTMLDivElement>;
  constructor(@Inject(DOCUMENT) private document : Document, private sharedService: SharedService){}
  ngOnInit(): void {
    this.sharedService.setMenuElementRef(this.menu);
  }
}
