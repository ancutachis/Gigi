import { BrightManiaPage } from './app.po';

describe('bright-mania App', () => {
  let page: BrightManiaPage;

  beforeEach(() => {
    page = new BrightManiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
