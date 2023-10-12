import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'simslite-simple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss'],
})
export class SimpleComponent {

  private router = inject(Router);
  protected toDetailed(): void {
    this.router.navigate(['/invoice/detailed']);
  }
}
