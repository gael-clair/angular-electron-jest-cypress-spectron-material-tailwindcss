import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseService, LoggerService } from '@app/core/services';
import { HomeComponent } from './home.component';
import Mock = jest.Mock;

jest.mock('@app/core/services/logger.service');
jest.mock('@app/core/services/database.service');

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [LoggerService, DatabaseService],
      declarations: [HomeComponent],
    }).compileComponents();

    const databaseService: DatabaseService = TestBed.inject(DatabaseService);
    (databaseService.list as Mock).mockResolvedValue([{ name: 'test' }]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
