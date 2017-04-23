import { M4DevSitePage } from './app.po';

describe('m4-dev-site App', () => {
  let page: M4DevSitePage;

  beforeEach(() => {
    page = new M4DevSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
