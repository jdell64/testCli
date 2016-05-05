import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TestCliAppComponent } from '../app/test-cli.component';

beforeEachProviders(() => [TestCliAppComponent]);

describe('App: TestCli', () => {
  it('should create the app',
      inject([TestCliAppComponent], (app: TestCliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'test-cli works!\'',
      inject([TestCliAppComponent], (app: TestCliAppComponent) => {
    expect(app.title).toEqual('test-cli works!');
  }));
});
