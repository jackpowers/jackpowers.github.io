//spec.js
describe("Protractor Remember the Milk Demo", function() {
    it("should have the right title", function() {
    //webpage that we navigate to
    browser.waitForAngularEnabled(false);
    browser.get("http://www.automatahackers.com");
    
    
    //Confirm the title
    console.log(browser.getTitle());
    expect(browser.getTitle()).toEqual("AutomataHackers");
    });
    });