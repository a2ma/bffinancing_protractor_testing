describe('BFF form', function() {
  it('should go to website', function() {
    browser.driver.get('https://bffinancing.com/manage/contact');
    browser.driver.ignoreSynchronization = true;
    browser.driver.findElement(by.name('first')).sendKeys('Julie');
    browser.driver.findElement(by.name('last')).sendKeys('Angrim');
    browser.driver.findElement(by.name('address1')).sendKeys('1234 Broadcurrent Avenue');
    browser.driver.findElement(by.name('address2')).sendKeys('');
    browser.driver.findElement(by.name('city')).sendKeys('Columbus');
    browser.driver.findElement(by.name('state')).sendKeys('Ohio');
    browser.driver.findElement(by.name('zipcode')).sendKeys('43230');
    browser.driver.findElement(by.name('phone')).sendKeys('111-111-1111');
    browser.driver.findElement(by.name('email')).sendKeys('julie@angrim.com');
    browser.driver.findElement(by.name('company')).sendKeys('Angrim Productions');
    browser.driver.findElement(by.name('message')).sendKeys('Hi!');
    
    browser.driver.findElement(by.css('box-footer')).click();
  });
});