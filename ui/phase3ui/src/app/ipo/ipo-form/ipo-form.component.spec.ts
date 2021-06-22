import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoFormComponent } from './ipo-form.component';

describe('IpoFormComponent', () => {
  let component: IpoFormComponent;
  let fixture: ComponentFixture<IpoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
