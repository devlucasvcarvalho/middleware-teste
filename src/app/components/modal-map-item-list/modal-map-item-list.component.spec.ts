import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMapItemListComponent } from './modal-map-item-list.component';

describe('ModalMapItemListComponent', () => {
  let component: ModalMapItemListComponent;
  let fixture: ComponentFixture<ModalMapItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMapItemListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalMapItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
