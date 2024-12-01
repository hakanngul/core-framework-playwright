import { LoginPage } from '../pages/LoginPage.js';
import { HomePage } from '../pages/HomePage.js';
import { ProfilePage } from '../pages/ProfilePage.js';

export class PageFactory {
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
                return new LoginPage(this.page);
            case 'home':
                return new HomePage(this.page);
            case 'profile':
                return new ProfilePage(this.page);
            default:
                throw new Error(`Page ${pageName} not found in PageFactory`);
        }
    }
}
