import { LhubdemoPage } from './app.po';

describe('lhubdemo App', () => {
  let page: LhubdemoPage;

  beforeEach(() => {
    page = new LhubdemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
