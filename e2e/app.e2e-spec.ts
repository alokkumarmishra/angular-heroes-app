import { AngularHeroesAppPage } from './app.po';

describe('angular-heroes-app App', () => {
  let page: AngularHeroesAppPage;

  beforeEach(() => {
    page = new AngularHeroesAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
