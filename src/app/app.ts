import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './componentes/header/header';
import { Hero } from './componentes/hero/hero';
import { Programas } from './componentes/programas/programas';
import { Niveles } from './componentes/niveles/niveles';
import { Docentes } from './componentes/docentes/docentes';
import { Horarios } from './componentes/horarios/horarios';
import { Testimonios } from './componentes/testimonios/testimonios';
import { Nosotros } from './componentes/nosotros/nosotros';
import { Footer } from './componentes/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header, Hero, Programas, Niveles, Docentes,
    Horarios, Testimonios, Nosotros, Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('global-languages');
}