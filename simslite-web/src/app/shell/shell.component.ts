import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'

@Component({
  selector: 'simslite-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent { }
