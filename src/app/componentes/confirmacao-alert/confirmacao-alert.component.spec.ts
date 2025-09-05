import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoAlertComponent } from './confirmacao-alert.component';

describe('ConfirmacaoAlertComponent', () => {
  let component: ConfirmacaoAlertComponent;
  let fixture: ComponentFixture<ConfirmacaoAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmacaoAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
