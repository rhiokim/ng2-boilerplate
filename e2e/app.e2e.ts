import { HarooPage } from './app.po';

describe('haroo App', function() {
  let page: HarooPage;

  beforeEach(() => {
    page = new HarooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('haroo works!');
  });
});
