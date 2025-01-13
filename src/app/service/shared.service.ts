import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private menuElementRef!: ElementRef<HTMLDivElement>;

  setMenuElementRef(elementRef: ElementRef<HTMLDivElement>): void {
    this.menuElementRef = elementRef;
  }

  getMenuElementRef(): ElementRef<HTMLDivElement> {
    return this.menuElementRef;
  }
}