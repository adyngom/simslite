import { hlm } from '@spartan-ng/ui-core';
import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FullTwoColumnComponent } from '@simslite/ui-layouts'
import { hlmH1, hlmH2, hlmBlockquote, hlmLead, hlmP } from '@spartan-ng/ui-typography-helm'
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm'
import { radixChevronDown, radixStopwatch, radixLapTimer, radixGithubLogo, radixLinkedinLogo } from '@ng-icons/radix-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'simslite-auth',
  standalone: true,
  imports: [
    CommonModule,
    FullTwoColumnComponent,
    HlmIconComponent],
  providers: [
    provideIcons({
      radixChevronDown, radixStopwatch, radixLapTimer, radixGithubLogo,
      radixLinkedinLogo
    })
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  private router = inject(Router)
  isAuthed(): void {
    this.router.navigate(['/data-table'])
  }
}
