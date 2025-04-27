import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCounterComponent } from './recipe-counter.component';

describe('RecipeCounterComponent', () => {
  let component: RecipeCounterComponent;
  let fixture: ComponentFixture<RecipeCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
