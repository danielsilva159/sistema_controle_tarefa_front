import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharTarefaComponent } from './detalhar-tarefa.component';

describe('DetalharTarefaComponent', () => {
  let component: DetalharTarefaComponent;
  let fixture: ComponentFixture<DetalharTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalharTarefaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalharTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
