import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NonTeachingPage } from './non-teaching.page';

describe('NonTeachingPage', () => {
  let component: NonTeachingPage;
  let fixture: ComponentFixture<NonTeachingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonTeachingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NonTeachingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
