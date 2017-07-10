import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core'; 

import { AppComponent } from './app.component';
import { TajrecipesComponent } from './tajrecipes/tajrecipes.component';
import { HeaderComponent } from './header/header.component';
import { TajrecipeListComponent } from './tajrecipes/tajrecipe-list/tajrecipe-list.component';
import { TajrecipeDetailComponent } from './tajrecipes/tajrecipe-detail/tajrecipe-detail.component';
import { TajrecipeItemComponent } from './tajrecipes/tajrecipe-list/tajrecipe-item/tajrecipe-item.component';
import { TajshoppingListComponent } from './tajshopping-list/tajshopping-list.component';
import { TajshoppingEditComponent } from './tajshopping-edit/tajshopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TajrecipesComponent,
    HeaderComponent,
    TajrecipeListComponent,
    TajrecipeDetailComponent,
    TajrecipeItemComponent,
    TajshoppingListComponent,
    TajshoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
