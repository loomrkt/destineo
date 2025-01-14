import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [],
  templateUrl: './brand.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandComponent implements AfterViewInit{
    @ViewChild('brand', {static: true}) brand! : ElementRef<HTMLDivElement>;
  ngAfterViewInit(): void {
    this.initAnimation();
  }
  initAnimation(): void {
    gsap.fromTo(this.brand.nativeElement, {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: this.brand.nativeElement,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
      },
    });
  }
}
