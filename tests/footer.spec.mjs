import { test, expect } from '@playwright/test';

test.describe("Footer Section", () => {

    // hook to navigate to the portfolio page before each test
    test.beforeEach(async ({page}) => {
        await page.goto("https://luka-cafuta.ch/");
    });

    // TEST HORIZONTAL LINE
    test("should display the horizontal line correctly", async ({ page }) => {
        const divider = page.locator('footer div.border-t');
        await expect(divider).toBeVisible();
        await expect(divider).toHaveClass(/border-custom-dark-chocolate-brown|dark:border-custom-light-chocolate-brown/);
    });

    // TEST QUOTE AND AUTHOR
    test("should display the quote and author correctly", async ({ page }) => {
        // locate quote, check if the quote is visible and correct
        const quote = page.locator('footer div.flex.text-xl.font-bold.self-center');
        await expect(quote).toBeVisible();
        await expect(quote).toHaveText("\"I walk around like everything's fine, but deep down, inside my shoe, my sock is sliding off.\"");

        // locate author, check if the author is visible and correct
        const author = page.locator('footer div.flex.flex-row.justify-end');
        await expect(author).toBeVisible();
        await expect(author).toHaveText('— Unknown');
    });

    // TEST COPYRIGHT SECTION
    test("should display the copyright section with the correct year and name", async ({ page }) => {
        const copyright = page.locator('footer div.flex.flex-row.justify-center.items-center');
        await expect(copyright).toBeVisible();
        await expect(copyright).toHaveText('2024 Luka Cafuta');

        const copyrightImage = page.locator('footer img');
        // check for light theme
        await expect(copyrightImage).toHaveAttribute('src', '/copyright-dark-brown.svg');
        // toggle to dark theme
        const themeToggle = page.locator('div.cursor-pointer.w-14.h-8');
        await themeToggle.click();
        // check for dark theme
        await expect(copyrightImage).toHaveAttribute('src', '/copyright-light-brown.svg')
    });
});