import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeVideosComponent } from './like-videos.component';

describe('LikeVideosComponent', () => {
  let component: LikeVideosComponent;
  let fixture: ComponentFixture<LikeVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeVideosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
