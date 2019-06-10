describe('Home', () => {
    var homePage = 'http://localhost:8080';
    var loginPage = 'http://localhost:8080/login';

    it('should navigate to home page', () => {
        browser.get('http://localhost:8080');
        expect(homePage).toBe('http://localhost:8080');
    });

    it('page should have loaded correctly', () => {
        expect(browser.element(by.className('home-title')).getText()).toEqual("Hi Thomas!");
        expect(browser.element(by.className('home-text')).getText()).toEqual("You're logged in with Angular 7!!");
        expect(browser.element(by.className('home-registered-title')).getText()).toEqual("All registered users:");
    });

    it('delete exsiting user', () => {
        browser.element(by.className('delete-registered-user')).click();
        
    });

    it('and then logging out', () => {
        browser.element(by.className('logout-btn')).click();
        expect(loginPage).toBe('http://localhost:8080/login');
    });
});