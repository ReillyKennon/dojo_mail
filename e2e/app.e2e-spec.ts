import { DojoEmailsPage } from './app.po';

describe('dojo-emails App', () => {
  let page: DojoEmailsPage;

  beforeEach(() => {
    page = new DojoEmailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
