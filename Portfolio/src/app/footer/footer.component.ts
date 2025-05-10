import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGithub = faGithub // Replace with your actual GitHub icon if needed
  email = 'minanasser82018@gmail.com';
  phone = '+20 100 000 0000';
  linkedinUrl = 'https://www.linkedin.com/in/mina-nasser-al5al/';
  facebookUrl = 'https://www.facebook.com/minanasser';
  twitterUrl = 'https://twitter.com/minanasser'; // Replace with your actual Twitter URL if needed
  githubUrl = 'https://github.com/MinaNasser';
}
