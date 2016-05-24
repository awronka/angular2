// spec.js
describe('Protractor Demo App', function() {
  it('should have a title', function(done) {
    browser.get('http://localhost:1337');

    expect(browser.getTitle()).toEqual('Simple Server');
    done()
  });

   it('shouldnt have a title', function(done) {
    browser.get('http://localhost:1337');

    expect(browser.getTitle()).not.toBe('Simpler Server');
    done()
  });
});