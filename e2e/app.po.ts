export class TestCliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('test-cli-app h1')).getText();
  }
}
