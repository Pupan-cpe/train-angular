import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestApiRoutingModule } from './test-api-routing.module';
import { TestApiComponent } from './test-api.component';


@NgModule({
  declarations: [
    TestApiComponent
  ],
  imports: [
    CommonModule,
    TestApiRoutingModule
  ]
})
export class TestApiModule { }
