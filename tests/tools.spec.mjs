import { test, expect } from '@playwright/test';
import tools from '../data/tools.json' assert { type: 'json' };


test.describe("Tools Section", () => {

    // create a hook that will run before each test, it will go to the portfolio page
    test.beforeEach(async ({page}) => {
        await page.goto("https://luka-cafuta.ch/");
    });

    test("should display the correct tools with their correct images", async ({ page }) => {
        for (const tool of tools) {
            // check if the tool image is visible and has the correct source
            const toolImage = page.locator(`img[src="${tool.icon}"]`);
            await expect(toolImage).toBeVisible();
        }
    });

    test("should display the tool name popup when the tool icon is clicked", async ({ page }) => {
        for (const tool of tools) {
            // find the tool image by its source
            const toolImage = page.locator(`img[src="${tool.icon}"]`);
            await expect(toolImage).toBeVisible();

            // click the tool image
            await toolImage.click();

            // check if the popup with the tool's name is visible
            const toolPopup = page.locator(`div.absolute >> text="${tool.name}"`);
            await expect(toolPopup).toBeVisible();

            // click outside to close the popup
            await page.locator('header').click();
            await expect(toolPopup).not.toBeVisible();
        }
    });

    test("should toggle the popup visibility on repeated clicks", async ({ page }) => {
        // select the first tool
        const firstTool = tools[0];
        const toolImage = page.locator(`img[src="${firstTool.icon}"]`);

        // click image/icon to show the popup
        await toolImage.click();
        const toolPopup = page.locator(`div.absolute >> text=${firstTool.name}`);
        await expect(toolPopup).toBeVisible();

        // click again to hide the popup
        await toolImage.click();
        await expect(toolPopup).not.toBeVisible();
    })
});