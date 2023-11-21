import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LaptopComponent } from './laptop/laptop.component';
import { LaptopListComponent } from './laptop/laptop-list/laptop-list.component';
import { LaptopDetailComponent } from './laptop/laptop-detail/laptop-detail.component';
import { LaptopItemComponent } from './laptop/laptop-list/laptop-item/laptop-item.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { KeyboardEditComponent } from './keyboard/keyboard-edit/keyboard-edit.component';

import { FormsComponent } from './forms/forms.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { PratiseComponent } from './pratise/pratise.component';
import { HighlightDirective } from './pratise/highlight.directive';
import { BetterHighlightDirective } from './pratise/better-highlight.directive';
import { ExtraDDirective } from './pratise/extra-d.directive';
import { DropDownDirective } from './header/sharedDirective/dropdown.directive';
import { NavbarDirective } from './header/sharedDirective/navbarr.directive';
import { DemoService } from './service-pratise/demo.service';
import { ServicePratiseComponent } from './service-pratise/service-pratise.component';

import { MainRouterComponent } from './main-router/main-router.component';
import { RouterOneComponent } from './router-one/router-one.component';
import { RouterTwoComponent } from './router-two/router-two.component';
import { RouterThreeComponent } from './router-three/router-three.component';
import { RouterTwoChildComponent } from './router-two/router-two-child/router-two-child.component';
import { RouterTwoChildOneComponent } from './router-two/router-two-child-one/router-two-child-one.component';
import { RouterThreeChildComponent } from './router-three/router-three-child/router-three-child.component';
import { RouterThreeChildOneComponent } from './router-three/router-three-child-one/router-three-child-one.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { RouterNotFoundComponent } from './router-not-found/router-not-found.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effect';


const routes: Routes = [
  { path: '', component: RouterOneComponent },

  {
    path: 'router-two', component: RouterTwoComponent, children: [
      { path: ':id/:name', component: RouterTwoChildOneComponent },
    ]
  },
  { path: 'router-three', component: RouterThreeComponent },
  { path: 'router-three/:id/:name', component: RouterThreeChildOneComponent },
  { path: 'router-three/:id/:value', component: RouterThreeChildComponent },
  { path: 'router-one/:string', component: RouterOneComponent },
  { path: 'router-not-found', component: RouterNotFoundComponent },
  { path: '**', redirectTo: '/router-not-found' },


];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaptopComponent,
    LaptopListComponent,
    LaptopDetailComponent,
    LaptopItemComponent,
    KeyboardComponent,
    KeyboardEditComponent,
    FormsComponent,
    ParentComponent,
    ChildComponent,
    PratiseComponent,
    HighlightDirective,
    BetterHighlightDirective,
    ExtraDDirective,
    DropDownDirective,
    NavbarDirective,
    ServicePratiseComponent,
    MainRouterComponent,
    RouterOneComponent,
    RouterTwoComponent,
    RouterThreeComponent,
    RouterTwoChildComponent,
    RouterTwoChildOneComponent,
    RouterThreeChildComponent,
    RouterThreeChildOneComponent,
    RouterNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      counter: counterReducer
    }),
    EffectsModule.forRoot([CounterEffects])],

  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
