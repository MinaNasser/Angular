import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CounterService } from '../services/counter.service';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  count: number = 0;

  constructor(private countService: CounterService) {;
  }
  ngOnInit() {
    this.countService.getCount().subscribe((countRE) => {
      this.count = countRE;
    });
  }
}
