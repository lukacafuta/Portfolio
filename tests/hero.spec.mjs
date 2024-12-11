import { test, expect } from '@playwright/test';

test.describe("Hero Section", () => {

    // create a hook that will run before each test, it will go to the portfolio page
    test.beforeEach(async ({ page }) => {
        await page.goto("https://luka-cafuta.ch/");
    });

    test("should display the correct heading, paragraphs and profile photo", async ({ page }) => {
       // check if the heading is correct
        const heading = page.getByRole('heading', { name: "Sali, I'm Luka Cafuta" });
        await expect(heading).toBeVisible();

       // check if the first paragraph is displayed correctly
        const firstParagraph = page.locator('p', { hasText: "Chiseling React.js and Django into timeless digital craftsmanship." });
        await expect(firstParagraph).toBeVisible();

        // check if the second paragraph is displayed correctly
        const secondParagraph = page.locator('p', { hasText: "Blockchain aficionado from Switzerland, turned full stack developer." });
        await expect(secondParagraph).toBeVisible();

        // check if the profile photo is displayed correctly (for light theme, default)
        const profilePhoto = page.locator('img[alt="Profile photo"]');
        await expect(profilePhoto).toBeVisible();
        await expect(profilePhoto).toHaveAttribute("src", "/profile-photo-lightmode.png");
    });

    test("should display the correct profile photo based on theme", async ({ page }) => {
       const profilePhoto = page.locator('img[alt="Profile photo"]');

       // check light teme profile photo by default
        await expect(profilePhoto).toHaveAttribute("src", "/profile-photo-lightmode.png");

        // toggle to dark theme
        const toggleTheme = page.locator('div.cursor-pointer.w-14.h-8');
        await toggleTheme.click();

        // check dark theme profile photo
        await expect(profilePhoto).toHaveAttribute("src", "/profile-photo-darkmode.png");
    });

    // group tests related to the social links
    test("should display LinkedIn and GitHub links with correct attributes", async({ page }) => {

        // locate the LinkedIn and GitHub links
        const linkedInLink = page.getByRole("link", { name: "LinkedIn"});
        const githubLink = page.getByRole("link", { name: "Github"});

        // check visibility
        await expect(linkedInLink).toBeVisible();
        await expect(githubLink).toBeVisible();

        // check href attributes
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