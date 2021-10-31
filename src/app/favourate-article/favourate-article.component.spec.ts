import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavourateArticleComponent } from './favourate-article.component';

describe('FavourateArticleComponent', () => {
  let component: FavourateArticleComponent;
  let fixture: ComponentFixture<FavourateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavourateArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavourateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
