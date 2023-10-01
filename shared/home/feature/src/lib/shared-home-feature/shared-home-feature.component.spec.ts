import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedHomeFeatureComponent } from './shared-home-feature.component';

describe('SharedHomeFeatureComponent', () => {
  let component: SharedHomeFeatureComponent;
  let fixture: ComponentFixture<SharedHomeFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedHomeFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedHomeFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
