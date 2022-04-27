import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './admin.guard';
import { environment } from '../environment';

import { AppRoutingModule } from './app-routing.module';
import { PreloadGuard } from './preload.guard';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AnimalComponent,
    AnimalDetailComponent,
    ErrorComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AdminGuard, PreloadGuard],
})
export class AppModule {}
