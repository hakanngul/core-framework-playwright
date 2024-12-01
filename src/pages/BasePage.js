const { expect } = require('@playwright/test');
const { Logger } = require('../utils/Logger');

class BasePage {
    /**
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.page = page;
        this.logger = new Logger();
    }

    /**
     * Navigate to a URL
     * @param {string} url 
     */
    async navigate(url) {
        this.logger.info(`Navigating to ${url}`);
        await this.page.goto(url);
    }

    /**
     * Wait for element and click
     * @param {string} selector 
     */
    async clickElement(selector) {
        this.logger.info(`Clicking element: ${selector}`);
        await this.page.locator(selector).click();
    }

    /**
     * Type text into an input field
     * @param {string} selector 
     * @param {string} text 
     */
    async typeText(selector, text) {
        this.logger.info(`Typing text: ${text} into ${selector}`);
        await this.page.locator(selector).fill(text);
    }

    /**
     * Get text from an element
     * @param {string} selector 
     * @returns {Promise<string>}
     */
    async getText(selector) {
        return await this.page.locator(selector).innerText();
    }

    /**
     * Wait for element to be visible
     * @param {string} selector 
     */
    async waitForElement(selector) {
        await this.page.locator(selector).waitFor({ state: 'visible' });
    }

    /**
     * Take screenshot
     * @param {string} name 
     */
    async takeScreenshot(name) {
        await this.page.screenshot({ path: `./screenshots/${name}.png` });
    }
}
