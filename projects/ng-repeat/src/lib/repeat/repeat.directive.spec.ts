import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgRepeatDirective } from './repeat.directive';

@Component({
  template: `
  <ng-container *ngRepeat="5, let i = index">
    <p id="element">Prueba de ecnfRepeat {{i}}</p>
  </ng-container>`
})
class TestComponent { }

describe('NgRepeatDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRepeatDirective, TestComponent ]
    });
  });

  describe('Init Component', () => {

    it('should create test component', () => {
      const fixture = TestBed.createComponent(TestComponent);
      const app = fixture.debugElement.componentInstance;

      fixture.detectChanges();
      expect(app).toBeTruthy();

      expect(fixture.debugElement.children.length).toBe(5);
    });

  });
});

