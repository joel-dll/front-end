import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNurseryComponent } from './our-nursery.component';

describe('OurNurseryComponent', () => {
  let component: OurNurseryComponent;
  let fixture: ComponentFixture<OurNurseryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OurNurseryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurNurseryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
