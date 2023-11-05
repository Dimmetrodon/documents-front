import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentComponent } from './components/document/document.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterDocumentsPipe } from './pipes/filter-documents.pipe';
import { DocumentDetailsComponent } from './pages/document-details/document-details.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { PositionComponent } from './components/position/position.component';

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    DocumentDetailsComponent,
    FilterDocumentsPipe,
    DocumentsComponent,
    DocumentDetailsComponent,
    PositionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
