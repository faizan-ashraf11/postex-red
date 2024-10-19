import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { TopbarComponent } from './pages/sections/topbar/topbar.component';
import { SearchBarComponent } from './pages/sections/search-bar/search-bar.component';
import { HeroSectionComponent } from './pages/sections/hero-section/hero-section.component';
import { IconSectionComponent } from './pages/sections/icon-section/icon-section.component';
import { TitleSectionComponent } from './pages/sections/title-section/title-section.component';
import { ImageSectionComponent } from './pages/sections/image-section/image-section.component';
import { FooterComponent } from './pages/sections/footer/footer.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    SearchBarComponent,
    HeroSectionComponent,
    IconSectionComponent,
    TitleSectionComponent,
    ImageSectionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NzDrawerModule,
    NzDropDownModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
