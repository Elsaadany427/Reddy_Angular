import { AboutComponent } from './about/about.component';
import { FavourateArticleComponent } from './favourate-article/favourate-article.component';
import { FeedsComponent } from './feeds/feeds.component';
import { AccountComponent } from './account/account.component';
import { SettingComponent } from './setting/setting.component';
import { EditorComponent } from './editor/editor.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './about/edit/edit.component';

const routes: Routes = [
  { path: '' , redirectTo: 'Home' , pathMatch:'full' },
  { path: 'Home' , component: HomeComponent },
  { path: 'editor' , component: EditorComponent },
  { path: 'favourate' , component: FavourateArticleComponent },
  { path: 'setting', component: SettingComponent },
  { path: 'about/:id' , component: AboutComponent },
  { path: 'edit/:id' , component: EditComponent },
  { path: 'account/:id' , component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
