import { test, expect } from '@playwright/test';
import { PageFactory } from '../src/factories/PageFactory.js';

test.describe('Example Test Suite', () => {
    let pageFactory;
    let loginPage;

    test.beforeEach(async ({ page }) => {
        pageFactory = new PageFactory(page);
        loginPage = await pageFactory.createPage('login');
    });

    test('should login successfully @smoke', async () => {
        await loginPage.navigate('/login');
        await loginPage.login('test@example.com', 'password123');
        await expect(loginPage.getWelcomeMessage()).toBeVisible();
    });
});
