import { Component } from '@angular/core';
import {MainLayoutComponent} from "./layout/main-layout/main-layout.component";

@Component({
  selector: 'openfirefly-root',
  standalone: true,
  imports: [MainLayoutComponent],
  template: `<openfirefly-main-layout></openfirefly-main-layout>`
})
export class AppComponent {
  title = 'example-app';
}
