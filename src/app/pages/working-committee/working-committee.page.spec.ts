import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkingCommitteePage } from './working-committee.page';

describe('WorkingCommitteePage', () => {
  let component: WorkingCommitteePage;
  let fixture: ComponentFixture<WorkingCommitteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingCommitteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkingCommitteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
