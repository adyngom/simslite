import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FullTwoColumnComponent } from './full-two-column.component'

describe('FullTwoColumnComponent', () => {
  let component: FullTwoColumnComponent
  let fixture: ComponentFixture<FullTwoColumnComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullTwoColumnComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FullTwoColumnComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
