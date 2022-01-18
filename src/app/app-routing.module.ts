import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component'; //? เพิ่มเข้ามาใหม่

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'welcome',
    component: LayoutComponent, //? เพิ่มเข้ามาใหม่
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule),
  },

  {
    path: 'test-api',
    component: LayoutComponent, //? เพิ่มเข้ามาใหม่
    loadChildren: () =>
      import('./pages/test-api/test-api.module').then((m) => m.TestApiModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
