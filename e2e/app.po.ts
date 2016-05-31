export class HarooPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('haroo-app h1')).getText();
  }
}
