import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { SettingComponent } from './setting/setting.component';
import { AccountComponent } from './account/account.component';
import { FeedsComponent } from './feeds/feeds.component';
import { GlobalFeedComponent } from './feeds/global-feed/global-feed.component';
import { YourFeedComponent } from './feeds/your-feed/your-feed.component';
import { LikeComponent } from './like/like.component';
import { FavourateArticleComponent } from './favourate-article/favourate-article.component';
import { EditComponent } from './about/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    HomeComponent,
    EditorComponent,
    SettingComponent,
    AccountComponent,
    FeedsComponent,
    GlobalFeedComponent,
    YourFeedComponent,
    LikeComponent,
    FavourateArticleComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
