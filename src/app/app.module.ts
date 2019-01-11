import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {environment} from './/../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects]),
    // StoreModule.forRoot({shoppingList: shoppingListReducer}) Register reducers javascript obj
    StoreModule.forRoot(reducers), // or import and register reducers
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [] // if env is prod add StoreDevtoolsModule. Otherwise pass empty
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
