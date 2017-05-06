import { DinoExplorerPage } from './app.po';

describe('dino-explorer App', () => {
  let page: DinoExplorerPage;

  beforeEach(() => {
    page = new DinoExplorerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
