import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { VideoPlaySectionComponent } from './video-play-section/video-play-section.component';
import { CommentComponent } from './comment/comment.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [AppComponent, FormArrayComponent, BannerComponent, VideoPlaySectionComponent, CommentComponent, WarningComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
