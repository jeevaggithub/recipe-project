import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { shopingListComponent } from './components/shoping-list/shoping-list.component';
import { shopingListEditComponent } from './components/shoping-list-edit/shoping-list-edit.component';
import { HomeComponent } from './components/home/home.component';
import { header1 } from './components/header1/header1.component';
import { RecipeBookComponent } from './components/recipes/recipe-book/recipe-book.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { recipe } from './components/recipes/recipe/recipe.component';
import { ToggleDropdown } from './shared/dropdown.directive';
import { ShoppingListService } from './components/shoping-list/shopping-list.service';
import { RecipeService } from './components/recipes/recipe.service';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'user', component: UserDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    shopingListComponent,
    shopingListEditComponent,
    header1,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    recipe,ToggleDropdown,
    UserDetailComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
