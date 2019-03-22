import { fakeAsync, TestBed, async,inject } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';


import { IndexModule } from './index/index.module';
import { NavbarComponent } from './index/navbar/navbar.component';
import {TranslateModule} from "@ngx-translate/core";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,NavbarComponent
      ],imports: [ RouterTestingModule,TranslateModule,AngularFireDatabaseModule ,SharedModule],
      providers: []
    }).compileComponents();
  }));
  it('should create the app', (done) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
    done();
  });

});
