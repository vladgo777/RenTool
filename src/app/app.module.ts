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
import { PageChooseComponent } from './components/page-choose/page-choose.component';
import { SearchLineComponent } from './components/search-line/search-line.component';
import { NavbarCardComponent } from './components/navbar-card/navbar-card.component';
import { SearchLine2Component } from './components/search-line2/search-line2.component';
import { CardSearchLineComponent } from './components/card-search-line/card-search-line.component';
import { ChildrenLinkSearchComponent } from './components/children-link-search/children-link-search.component';


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
    PageChooseComponent,
    SearchLineComponent,
    NavbarCardComponent,
    SearchLine2Component,
    CardSearchLineComponent,
    ChildrenLinkSearchComponent,
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
