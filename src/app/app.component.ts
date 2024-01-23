import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AcademicDataComponent } from './academic-data/academic-data.component';
import { CrewComponent } from './crew/crew.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    NewsComponent, 
    NosotrosComponent, 
    AcademicDataComponent, 
    CrewComponent,
    GalleryComponent,
    EventsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tailwind-clone';
}
