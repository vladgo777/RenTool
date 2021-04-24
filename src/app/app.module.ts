import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClient,  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterCategoryComponent } from './components/footer-category/footer-category.component';
import { ChildrenCategoryLinkComponent } from './components/children-category-link/children-category-link.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CategoriesComponent,
    CardCategoryComponent,
    FooterComponent,
    FooterCategoryComponent,
    ChildrenCategoryLinkComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
