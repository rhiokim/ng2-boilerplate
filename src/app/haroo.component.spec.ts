import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HarooAppComponent } from '../app/haroo.component';

beforeEachProviders(() => [HarooAppComponent]);

describe('App: Haroo', () => {
  it('should create the app',
      inject([HarooAppComponent], (app: HarooAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'haroo works!\'',
      inject([HarooAppComponent], (app: HarooAppComponent) => {
    expect(app.title).toEqual('haroo works!');
  }));
});
