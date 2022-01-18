import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from '../icons-provider.module';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon'; //q เพิ่มเข้ามาใหม่
import { RouterModule } from '@angular/router'; //q เพิ่มเข้ามาใหม่
import { LayoutComponent } from './layout/layout.component'; // ?

registerLocaleData(en);

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule, //?เพิ่มเข้ามาใหม่
    RouterModule, //?เพิ่มเข้ามาใหม่
    CommonModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
})
export class CoreModule {}
