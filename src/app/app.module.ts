import {CoreModule} from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import { NgModule } from '@angular/core';

@NgModule({

  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule],

  bootstrap: [AppComponent]
})

export class AppModule {}
