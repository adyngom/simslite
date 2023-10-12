import { ComponentFixture, TestBed } from '@angular/core/testing'
import { UiAnimationsComponent } from './ui-animations.component'

describe('UiAnimationsComponent', () => {
  let component: UiAnimationsComponent
  let fixture: ComponentFixture<UiAnimationsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAnimationsComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(UiAnimationsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
