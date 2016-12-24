import { NgMatPage } from './app.po';

describe('ng-mat App', function() {
  let page: NgMatPage;

  beforeEach(() => {
    page = new NgMatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
