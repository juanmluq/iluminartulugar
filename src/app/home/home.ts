// home.component.ts
import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  isMobile: boolean = false;
  isTablet: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
  }
}
