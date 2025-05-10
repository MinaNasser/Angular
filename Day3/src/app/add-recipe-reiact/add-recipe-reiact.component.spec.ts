/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddRecipeReiactComponent } from './add-recipe-reiact.component';

describe('AddRecipeReiactComponent', () => {
  let component: AddRecipeReiactComponent;
  let fixture: ComponentFixture<AddRecipeReiactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipeReiactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipeReiactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
