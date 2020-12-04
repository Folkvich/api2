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




@NgModule({
  declarations: [

    AppComponent,
    DialogShowComponent,
    DialogDeleteComponent,



  ],
  imports: [


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
    MatInputModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
