import { NgModule , NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Injectable} from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatIconModule, MatCardModule, MatToolbarModule, MatMenuModule, MatTooltipModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule, NoConflictStyleCompatibilityMode } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas : [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports : [
        MatIconModule, MatCardModule, MatToolbarModule, MatMenuModule, MatTooltipModule, MatFormFieldModule, MatButtonModule, MatInputModule, MatSelectModule, NoConflictStyleCompatibilityMode
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
