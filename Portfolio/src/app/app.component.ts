import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { BioComponent } from "./bio/bio.component";
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioProjectsComponent } from './portfolio-projects/portfolio-projects.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroSectionComponent,
     FontAwesomeModule,
      BioComponent,
      SkillsSectionComponent,
      PortfolioProjectsComponent,
      FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';

  constructor(private library: FaIconLibrary) {
    library.addIcons(faFacebook, faGithub, faLinkedin);
  }
}
