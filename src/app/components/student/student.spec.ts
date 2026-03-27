import { TestBed } from '@angular/core/testing';
import { StudentComponent } from './student';

describe('StudentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(StudentComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
