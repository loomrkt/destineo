import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IconBlockComponent } from '../../../components/iconBlock/iconBlock.component';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [IconBlockComponent, TranslateModule],
  templateUrl: './faq.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent implements AfterViewInit{
  @ViewChild('faq', {static: true}) faq! : ElementRef<HTMLDivElement>;
  @ViewChild('titre', {static: true}) titre! : ElementRef<HTMLDivElement>;
  @ViewChildren('appicon') appicons!: QueryList<ElementRef<HTMLDivElement>>;
  ngAfterViewInit(): void {
    this.initAnimation();
  }
  initAnimation() : void{
    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : this.faq.nativeElement,
        start : 'top 75%',
      }
    });
    tl.from(this.titre.nativeElement, {
      y : 100,
      opacity : 0,
      duration : 1,
    }).from(this.appicons.toArray().map(icon => icon.nativeElement), {
      y: 100,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
    });
  }
}
