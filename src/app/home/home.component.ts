import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule to imports
  templateUrl: './home.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMobile = false;
  isTablet = false;
}
