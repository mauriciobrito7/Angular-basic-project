import { GuiaPage } from './app.po';

describe('guia App', () => {
  let page: GuiaPage;

  beforeEach(() => {
    page = new GuiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
