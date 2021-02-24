import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalCommitteePage } from './local-committee.page';

describe('LocalCommitteePage', () => {
  let component: LocalCommitteePage;
  let fixture: ComponentFixture<LocalCommitteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalCommitteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalCommitteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
