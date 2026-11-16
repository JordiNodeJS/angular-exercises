import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      background: var(--bg);
      color: var(--fg);
    }

    header {
      padding: 1rem 1.5rem;
      border-bottom: 1px solid var(--border);
    }
  `,
  template: `
    <header>
      <h1>{{ title() }}</h1>
    </header>

    <main>
      <router-outlet />
    </main>
  `,
})
export class App {
  protected readonly title = signal('Hello world');
}
