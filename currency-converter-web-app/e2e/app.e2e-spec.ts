import { CurrencyConverterWebAppPage } from './app.po';

describe('currency-converter-web-app App', function() {
  let page: CurrencyConverterWebAppPage;

  beforeEach(() => {
    page = new CurrencyConverterWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
