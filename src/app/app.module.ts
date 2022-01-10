import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { nedodb } from './nedodb';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { DocumentComponent } from './document/document.component';
import { EditComponent } from './edit/edit.component';
const appRoutes: Routes =[
  { path: '', component: AppComponent},
  { path: 'doc', component: DocumentComponent},
  { path: 'edit', component: EditComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DocumentComponent,
    EditComponent
  ],
  imports: [
    /*HttpClientInMemoryWebApiModule.forRoot(
      nedodb { dataEncapsulation: false }
    ),*/
    RouterModule.forRoot(appRoutes),
    MatTabsModule,
    BrowserModule,
    MatSelectModule,
    HttpClientModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatChipsModule,
    MatCardModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
