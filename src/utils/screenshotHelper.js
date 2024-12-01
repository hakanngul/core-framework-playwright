// utils/screenshotHelper.js

/**
 * Takes a screenshot and attaches it to the test report
 * @param {import('@playwright/test').Page} page - Playwright page object
 * @param {import('@playwright/test').TestInfo} testInfo - Test info object
 * @param {Object} options - Screenshot options
 * @param {import('@playwright/test').Locator} [options.element] - Element to screenshot
 * @param {string} [options.fileName='screenshot'] - Name of the screenshot file
 * @param {boolean} [options.fullPage=false] - Whether to take full page screenshot
 * @param {Object} [options.screenshotOptions={}] - Additional Playwright screenshot options
 */
async function takeScreenshot(page, testInfo, options = {}) {
    try {
        const {
            element,
            fileName = 'screenshot',
            fullPage = false,
            screenshotOptions = {}
        } = options;

        let screenshotBuffer;

        if (element) {
            // Take screenshot of specific element
            screenshotBuffer = await element.screenshot({
                ...screenshotOptions
            });
        } else {
            // Take full page or viewport screenshot
            screenshotBuffer = await page.screenshot({
                fullPage,
                ...screenshotOptions
            });
        }

        // Add the screenshot to the test results
        await testInfo.attachments.push({
            name: fileName,
            contentType: 'image/png',
            body: screenshotBuffer
        });

        return screenshotBuffer;
    } catch (error) {
        console.error('Error taking screenshot:', error);
        throw new Error(`Failed to take screenshot: ${error.message}`);
    }
}

module.exports = { takeScreenshot };