import { test, expect } from '@playwright/test';
import content from '../data/content.json' assert { type: 'json' };

test.describe("AboutMe Section", () => {

    // create a hook that will run before each test, it will go to the portfolio page
    test.beforeEach(async ({page}) => {
        await page.goto("https://luka-cafuta.ch/");
    });

    test("should display the About Me heading", async ({ page }) => {
        const heading = await page.getByRole('heading', { name: 'About Me' });
        await expect(heading).toBeVisible();
        await expect(heading).toHaveClass(/text-3xl font-extrabold/);
    });

    test("should display all paragaraphs from the content.json file", async ({ page }) => {
        const paragraphs = content[0].text.split('\n\n');

        for (const paragraphText of paragraphs) {
            const paragraph = page.locator('p', {hasText: paragraphText});
            await expect(paragraph).toBeVisible();
        }
    });

    test("should display the paragraphs with the correct styling", async ({ page }) => {
        const allParagraphs = page.locator('section:has-text("About Me") p');
        const paragraphCount = await allParagraphs.count();

        for (let i = 0; i < paragraphCount; i++) {
            const paragraph = allParagraphs.nth(i);
            await expect(paragraph).toHaveClass(/mb-4 leading-relaxed/);
        }
    });
});