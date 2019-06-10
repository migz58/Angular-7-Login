describe('Login', () => {
    /*beforeEach(() => {
        browser.get('http://localhost:8080/login');
    });*/

    var loginPage = 'http://localhost:8080/login';

    it('should navigate to Login page', () => {
        browser.get('http://localhost:8080/login');
        expect(loginPage).toBe('http://localhost:8080/login');
    });

    it('have correct titles and button text', () => {
        expect(browser.element(by.className('login-username')).getText()).toEqual('Username');
        expect(browser.element(by.className('login-password')).getText()).toEqual('Password');
        expect(browser.element(by.className('login__button')).getText()).toEqual('Login');
    });

    it('testing if empty required fields do not submit on login', () => {
        element(by.className('login__button')).click();
    });

    it('expected result: Error for incorrect username entered', () => {
        browser.get('http://localhost:8080/login');
        browser.element(by.id('username')).sendKeys('tomm');
        browser.element(by.id('password')).sendKeys('pwd123');
        browser.element(by.className('login__button')).click();
        
        expect(browser.element(by.className('alert-class')).getText()).toEqual('Username or password is incorrect');
    });

    it('expected result: Error for incorrect password entered', () => {
        browser.get('http://localhost:8080/login');
        browser.element(by.id('username')).sendKeys('tommy');
        browser.element(by.id('password')).sendKeys('pwd12');
        browser.element(by.className('login__button')).click();
        
        expect(browser.element(by.className('alert-class')).getText()).toEqual('Username or password is incorrect');
    });


    it('redirect the user to the Home page if they provided correct credentials', () => {
        browser.get('http://localhost:8080/login');
        browser.element(by.id('username')).sendKeys('tommy');
        browser.element(by.id('password')).sendKeys('pwd123');
        browser.element(by.className('login__button')).click();
    });

    it('expected result: Navigate to Home page on correct login', () => {
        browser.wait(protractor.ExpectedConditions.visibilityOf(browser.element(by.className('home-title'))));
        expect((browser.element(by.className('home-title'))).isPresent()).toBeTruthy();
    });
});