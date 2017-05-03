import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { appRoutes } from './app.routes';
import { RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
