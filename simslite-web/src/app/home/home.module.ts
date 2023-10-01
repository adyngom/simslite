import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AccordionPreviewComponent } from './accordion';
import { CardPreviewComponent } from './card';
import { AlertPreviewComponent } from './alert';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, AccordionPreviewComponent, CardPreviewComponent, AlertPreviewComponent],
  declarations: [HomePage],
})
export class HomePageModule {}
