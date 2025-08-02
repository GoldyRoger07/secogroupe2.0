import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopButton } from './components/top-button/top-button';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TopButton],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'secogroupe';

   constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        console.log('URL changée :', event.urlAfterRedirects);

        // 🔁 Action à effectuer à chaque changement de route
        this.topFunction();
      });
  }

  topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
  }
}
