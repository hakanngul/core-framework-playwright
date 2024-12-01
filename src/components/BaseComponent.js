class BaseComponent {
    /**
     * @param {import('@playwright/test').Page} page 
     * @param {string} rootSelector - Root selector for the component
     */
    constructor(page, rootSelector) {
        this.page = page;
        this.rootSelector = rootSelector;
    }

    /**
     * Get element within component scope
     * @param {string} selector 
     * @returns {import('@playwright/test').Locator}
     */
    getElement(selector) {
        return this.page.locator(`${this.rootSelector} ${selector}`);
    }

    /**
     * Click element within component scope
     * @param {string} selector 
     */
    async click(selector) {
        await this.getElement(selector).click();
    }

    /**
     * Fill text in element within component scope
     * @param {string} selector 
     * @param {string} text 
     */
    async fill(selector, text) {
        await this.getElement(selector).fill(text);
    }

    /**
     * Get text from element within component scope
     * @param {string} selector 
     * @returns {Promise<string>}
     */
    async getText(selector) {
        return await this.getElement(selector).innerText();
    }

    /**
     * Check if element is visible within component scope
     * @param {string} selector 
     * @returns {Promise<boolean>}
     */
    async isVisible(selector) {
        return await this.getElement(selector).isVisible();
    }
}
