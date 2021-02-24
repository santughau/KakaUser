import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherStuffPage } from './other-stuff.page';

describe('OtherStuffPage', () => {
  let component: OtherStuffPage;
  let fixture: ComponentFixture<OtherStuffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherStuffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherStuffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
