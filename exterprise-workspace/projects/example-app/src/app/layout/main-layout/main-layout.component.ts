import { ChangeDetectionStrategy, Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'openfirefly-main-layout',
  standalone: true,
  imports: [
    TitleCasePipe,
    MatToolbar,
    MatButton,
    NgOptimizedImage,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatAnchor
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent {

}
