import { BlockspaPage } from './app.po';

describe('blockspa App', () => {
  let page: BlockspaPage;

  beforeEach(() => {
    page = new BlockspaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
