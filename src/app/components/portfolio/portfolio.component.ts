import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgIf,NgFor,NgClass],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class portfolioComponent {
images = [
    '../../../assets/img/poert1.png',
    '../../../assets/img/port2 (1).png',
    '../../../assets/img/port3 (1).png',
    '../../../assets/img/poert1.png',
    '../../../assets/img/port2 (1).png',
    '../../../assets/img/port3 (1).png'
  ];

  isOverlayVisible = false;
  activeImageSrc = '';
  activeIndex: number | null = null;

  showCard(index: number) {
    this.activeImageSrc = this.images[index];
    this.isOverlayVisible = true;
    this.activeIndex = index;
  }

  hideCard() {
    this.isOverlayVisible = false;
    this.activeIndex = null;
  }
}