import { test, expect } from '@playwright/test';

test.describe('Header', () => {

    // create a hook that will run before each test, it will go to the portfolio page
    test.beforeEach(async ({ page }) => {
        await page.goto('https://luka-cafuta.ch/');
    });

    test("should have correct metadata", async({ page }) => {

        // check if the title of the page is correct
        await expect(page).toHaveTitle("Luka's Portfolio");
    });

    test("should display logo with correct image based on theme", async ({ page }) => {

        // check if the logo is visible in light mode
        const logo = page.getByRole('img', { name: 'Luca logo' });
        await expect(logo).toBeVisible();
        await expect(logo).toHaveAttribute('src', '/luca-logo-lightmode.svg');
    });

    test("should display the theme toggle button with correct icons", async ({ page }) => {

        // check the light-mode/dark-mode icon
        const lightModeIcon = page.getByRole('img', { name: 'Light mode icon' });
        const darkModeIcon = page.getByRole('img', { name: 'Dark mode icon'});

        await expect(lightModeIcon).toBeVisible();
        await expect(lightModeIcon).toHaveAttribute('src', '/sun-dark-brown.svg');

        await expect(darkModeIcon).toBeVisible();
        await expect(darkModeIcon).toHaveAttribute('src', '/moon-stars-dark-brown.svg');
    });

    test("should toggle theme when clicking on the theme toggle button", async ({ page }) => {

        // locate the theme toggle button using CSS selector
        const themeToggle = page.locator('div.cursor-pointer.w-14.h-8');
        const logo = page.getByRole('img', { name: 'Luca logo' });

        // check initial state (light mode)
        await expect(logo).toHaveAttribute('src', '/luca-logo-lightmode.svg');

        // click the toggle button to switch to dark mode
        await themeToggle.click();

        // check if the logo image changes to dark mode
        await expect(logo).toHaveAttribute('src', '/luca-logo-darkmode.svg');
    });

    test ("should display the ribbon image", async ({ page }) => {
        const ribbon = page.getByRole('img', { name: 'Ribbon' });
        await expect(ribbon).toBeVisible();
        await expect(ribbon).toHaveAttribute('src', '/ribbon.svg');
    });
})