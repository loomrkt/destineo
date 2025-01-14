import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import{ TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './landing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent implements OnInit{

  @ViewChild('landing', {static: true}) landing! : ElementRef<HTMLDivElement>;
  @ViewChild('landingGauche', {static: true}) landingGauche! : ElementRef<HTMLDivElement>;
  constructor(@Inject(DOCUMENT) private document: Document){}
  ngOnInit(): void {
    this.initAnimation();
  }
  initAnimation() : void{
    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : this.document.body,
        end : 'top top',
      }
    });
    tl.from(this.landing.nativeElement, {
      opacity : 0,
      duration : 1,
    }).from(this.landingGauche.nativeElement, {
      x : -100,
      opacity : 0,
      duration : 1,
    }); 
  }
}
