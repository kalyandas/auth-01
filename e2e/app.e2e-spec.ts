import { Auth01Page } from './app.po';

describe('auth-01 App', function() {
  let page: Auth01Page;

  beforeEach(() => {
    page = new Auth01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
