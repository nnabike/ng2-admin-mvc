import { ScrollerMediaPage } from './app.po';

describe('scroller-media App', () => {
  let page: ScrollerMediaPage;

  beforeEach(() => {
    page = new ScrollerMediaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
