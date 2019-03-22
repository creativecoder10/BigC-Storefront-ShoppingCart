import { browser, by, element } from 'protractor';

export class IndexPage {
  navigateTo() {
    return browser.get('/'); // we can navigate to '/' for get pblic page since this is the default route
  }

  checkCarouselPresent() {
    return element(by.id('carousel-example-2')).isPresent();
  }

  NavbarPresent() {
      return element(by.css('app-navbar')).isDisplayed();
  }

}