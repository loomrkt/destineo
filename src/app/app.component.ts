import { Component } from '@angular/core';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
import { IStaticMethods } from 'preline/preline';
import { SpinnerComponent } from './components/spinner/spinner.component';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'destineo';
  isLoading = true;
  constructor(private router: Router) {
  }

  ngOnInit() {
    window.addEventListener('load', () => {
      this.isLoading = false;
    });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if (typeof window != 'undefined')
          {
            window.HSStaticMethods.autoInit();
          }
        }, 100);
      }
    });
  }
}
