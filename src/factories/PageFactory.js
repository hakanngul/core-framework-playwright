class PageFactory {
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * Create a page object based on page name
     * @param {string} pageName 
     * @returns {Promise<any>}
     */
    async createPage(pageName) {
        switch (pageName.toLowerCase()) {
            case 'login':
                const { LoginPage } = require('../pages/LoginPage');
                return new LoginPage(this.page);
            case 'home':
                const { HomePage } = require('../pages/HomePage');
                return new HomePage(this.page);
            case 'profile':
                const { ProfilePage } = require('../pages/ProfilePage');
                return new ProfilePage(this.page);
            default:
                throw new Error(`Page ${pageName} not found in PageFactory`);
        }
    }
}
