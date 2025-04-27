import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeReactiveComponent } from './add-recipe-reactive.component';

describe('AddRecipeReactiveComponent', () => {
  let component: AddRecipeReactiveComponent;
  let fixture: ComponentFixture<AddRecipeReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRecipeReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipeReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
