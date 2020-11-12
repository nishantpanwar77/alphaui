import { AuiCardsComponent } from './aui-cards/aui-cards.component';
import { AuiInformationComponent } from './aui-information/aui-information.component';
import { AuiButtonComponent } from './aui-button/aui-button.component';
import { Routes, RouterModule } from '@angular/router';
import { AuiProgressbarComponent } from './aui-progressbar/aui-progressbar.component';
import { ComponentsComponent } from './components';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent, children: [
      { path: 'information', component: AuiInformationComponent },
      { path: 'buttons', component: AuiButtonComponent },
      { path: 'progress-bars', component: AuiProgressbarComponent },
      { path: 'cards', component: AuiCardsComponent },
    ]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export const ComponentsRoutes = RouterModule.forChild(routes);
