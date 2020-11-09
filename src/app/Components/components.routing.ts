import { AuiButtonComponent } from './aui-button/aui-button.component';
import { Routes, RouterModule } from '@angular/router';
import { AuiProgressbarComponent } from './aui-progressbar/aui-progressbar.component';

const routes: Routes = [
  { path: 'buttons', component: AuiButtonComponent },
  { path: 'progress-bars', component: AuiProgressbarComponent },
];

export const ComponentsRoutes = RouterModule.forChild(routes);
