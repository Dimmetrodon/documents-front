import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentComponent } from './components/document/document.component';
import { DocumentDetailsComponent } from './pages/document-details/document-details.component';
import { DocumentsComponent } from './pages/documents/documents.component';

const routes: Routes = [
  { path: '', component: DocumentsComponent },
  { path: 'document/:id', component: DocumentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
