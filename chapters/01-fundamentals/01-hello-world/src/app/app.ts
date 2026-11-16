import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'super-app',
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
    main {
      padding: 1rem 1.5rem;
      text-align: center;
    }
  `,
  template: `
    <header>
      <h1>{{ title() }}</h1>
      <p>Variable normal: {{ normalVar }}</p>
    </header>

    <main>
      <p>{{ saludo('Don Pinpón') }}</p>
    </main>
  `,
})
export class App {
  protected readonly title = signal('Hello world');
  readonly normalVar = 'hola';

  saludo(nombre: string): string {
    return `hola, ${nombre}`;
  }
}
