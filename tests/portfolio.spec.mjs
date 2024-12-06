import { test, expect } from '@playwright/test';

test.describe("Portfolio", () => {

    // create a hook that will run before each test, it will go to the portfolio page
    test.beforeEach(async ({ page }) => {
        await page.goto("https://luka-cafuta.ch/");
    });


    test("should have correct metadata and elements", async({ page }) => {

        // check if the title of the page is correct
        await expect(page).toHaveTitle("Luka's Portfolio");

        // check if the heading is correct
        await expect(
            page.getByRole("heading", {
                name: "Sali, I'm Luka Cafuta",
            })
        ).toBeVisible();

        // check if the LinkedIn and GitHub links are correct (static properties: visibility, href)
        const linkedInLink = page.getByRole("link", { name: "LinkedIn"});
        const githubLink = page.getByRole("link", { name: "Github"});

        await expect(linkedInLink).toBeVisible();
        await expect(githubLink).toBeVisible();

        await expect(linkedInLink).toHaveAttribute("href", "https://www.linkedin.com/in/luka-cafuta");
        await expect(githubLink).toHaveAttribute("href", "https://github.com/lukacafuta");
    });


    // test("should navigate to LinkedIn when the button is clicked", async ({ page }) => {
    //
    //     // TRY 1
    //     // const linkedInLink = page.getByRole("link", { name: "LinkedIn" });
    //     // await linkedInLink.click();
    //     // await expect(page).toHaveURL("https://www.linkedin.com/in/luka-cafuta");
    //
    //     // TRY 2
    //     // // wait for new tab (popup) to open after clicking LinkedIn link
    //     // const [newPage] = await Promise.all([
    //     //     page.waitForEvent("popup"),     // listen for a popup event
    //     //     page.getByRole("link", { name: "LinkedIn" }).click(),     // click on the LinkedIn link
    //     // ]);
    //     // // check if the URL of the new tab is correct
    //     // await expect(newPage).toHaveURL(/.*linkedin\.com\/authwall.*sessionRedirect=.*\/in\/luka-cafuta.*/);
    //
    //     // TRY 3
    //     // const [request] = await Promise.all([
    //     //     page.waitForRequest((request) => request.url().includes("linkedin.com/in/luka-cafuta")),
    //     //     page.getByRole("link", { name: "LinkedIn" }).click(),
    //     // ]);
    //     //
    //     // expect(request.url()).toContain("linkedin.com/in/luka-cafuta");
    // });

    test("should navigate to GitHub when the button is clicked", async ({ page }) => {

        const [newPage] = await Promise.all([
            page.waitForEvent("popup"),
            page.getByRole("link", { name: "Github" }).click(),
        ]);

        await expect(newPage).toHaveURL("https://github.com/lukacafuta");
    });

});