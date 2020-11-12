import { ComponentsRoutes } from './components.routing';
import { AuiButtonComponent } from './aui-button/aui-button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuiProgressbarComponent } from './aui-progressbar/aui-progressbar.component';
import { ComponentsComponent } from './components';
import { AuiCardsComponent } from './aui-cards/aui-cards.component';

@NgModule({
  imports: [
    ComponentsRoutes,
    CommonModule
  ],
  declarations: [
    ComponentsComponent,
    AuiProgressbarComponent,
    AuiButtonComponent,
    AuiCardsComponent
  ]
})
export class ComponentsModule { }
