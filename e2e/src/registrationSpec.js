describe('registration', () => { 
    var registerPage = 'http://localhost:8080/register';
    var loginPage = 'http://localhost:8080/login';


    it('should navigate to register page', () => {
        browser.get('http://localhost:8080/register');
        expect(registerPage).toBe('http://localhost:8080/register');
    });

    it('page should have loaded correctly', () => {
        expect(browser.element(by.className('register-first-name')).getText()).toEqual('First Name');
        expect(browser.element(by.className('register-last-name')).getText()).toEqual('Last Name');
        expect(browser.element(by.className('register-username')).getText()).toEqual('Username');
        expect(browser.element(by.className('register-password')).getText()).toEqual('Password');
        expect(browser.element(by.className('register__button')).getText()).toEqual('Register');
    });

    it('should test that required input fields work', () => {
        element(by.className('register__button')).click();

        expect(registerPage).toBe('http://localhost:8080/register');
    });

    it('should register user', () => {
        element(by.id('firstName')).sendKeys('Thomas');
        element(by.id('lastName')).sendKeys('Example');
        element(by.id('username')).sendKeys('tommy');
        element(by.id('password')).sendKeys('pwd123');
        element(by.className('register__button')).click();
        
        expect(loginPage).toBe('http://localhost:8080/login');
        expect(browser.element(by.className('alert-class')).getText()).toEqual('Registration successful');
    });

    it('Should not register user is account already exists', () => {
        browser.get('http://localhost:8080/register');

        element(by.id('firstName')).sendKeys('Thomas');
        element(by.id('lastName')).sendKeys('Example');
        element(by.id('username')).sendKeys('tommy');
        element(by.id('password')).sendKeys('pwd123');
        element(by.className('register__button')).click();

        expect(browser.element(by.className('alert-class')).getText()).toEqual('Username "tommy" is already taken');
    });
});