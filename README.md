# angular-7-template

Run e2e testing:
Setup - Use npm to install Protractor globally with:
npm install -g protractor

This will install two command line tools, protractor and webdriver-manager. 
Try running protractor --version to make sure it's working.
The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. 
Use it to download the necessary binaries with:
webdriver-manager update

Now start up a server with:
webdriver-manager start
This will start up a Selenium Server and will output a bunch of info logs. 
Your Protractor test will send requests to this server to control a local browser. 
You can see information about the status of the server at http://localhost:4444/wd/hub.


Run the test:
protractor conf.js


Karma and Jasmine setup
>>>>
npm install karma-jasmine --save-dev

Note: Since karma-jasmine 0.3.0 the jasmine library is no longer bundled with karma-jasmine 
and you have to install it on your own. You can simply do it by:

npm install jasmine-core --save-dev




browser.element(by.className('logout-btn')).click();

browser.wait(protractor.ExpectedConditions.visibilityOf(browser.element(by.className('home-title'))));