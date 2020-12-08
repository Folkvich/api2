import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableFilterModule } from 'mat-table-filter';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogShowComponent } from './dialog-show/dialog-show.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [

    AppComponent,
    DialogShowComponent,
    DialogDeleteComponent,
    NavigationComponent,



  ],
  imports: [
    MatSelectModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
    MatTableFilterModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSlideToggleModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
