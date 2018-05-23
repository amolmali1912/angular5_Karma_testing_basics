import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeTestComponent } from './compute-test.component';

describe('ComputeTestComponent', () => {
  let component: ComputeTestComponent;
  let fixture: ComponentFixture<ComputeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should return 0 if it is negative', ()=> {
      const result = component.compute(-1);
      expect(result).toBe(0);
    })

    it('should return 0 if it is NEGATIVE', ()=> {
      const result = component.compute(-1);
      expect(result).toBeLessThan(1);
    })

});
