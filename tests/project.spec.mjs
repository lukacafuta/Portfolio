import { test, expect } from '@playwright/test';
import projects from '../data/projects.json' assert { type: 'json' };

test.describe("Projects Section", () => {

    // create a hook that will run before each test, it will go to the portfolio page
    test.beforeEach(async ({page}) => {
        await page.goto("https://luka-cafuta.ch/");
    });

    test("should display the My Projects heading", async ({ page }) => {
        const heading = await page.getByRole('heading', { name: 'Work' });
        await expect(heading).toBeVisible();
        await expect(heading).toHaveClass(/text-3xl font-extrabold/);
    });

    // loop through each project in projects.json and run the same tests
    projects.forEach((project, index) => {
        test(`should display project '${project.title}' with correct details`, async ({page}) => {

            // click "Next Project" button to navigate to the correct project
            const nextButton = page.getByRole('button', {name: 'Next Project'});
            for (let i = 0; i < index; i++) {
                await nextButton.click();
            }

            // check project ID number with generalized project ID locator
            const projectIdLocator = page.locator('div.flex.flex-row.justify-center.items-center.rounded-lg.text-3xl.md\\:text-4xl.font-extrabold.h-12.md\\:h-16.w-12.md\\:w-16.bg-custom-milk-chocolate-brown.text-custom-light-chocolate-brown');
            const expectedId = project.id.toString().padStart(2, '0');      // expected ID (pad the project ID to ensure it’s two digits)
            await expect(projectIdLocator).toContainText(expectedId);       // check that the project ID is displayed correctly

            // check project title
            const projectTitle = page.getByRole('heading', {name: project.title});
            await expect(projectTitle).toBeVisible();

            // check project description
            const projectDescription = page.getByText(project.description, {exact: false});
            await expect(projectDescription).toBeVisible();

            // check technologies used
            const techList = page.locator('ul');
            for (const tech of project.technologies) {
                await expect(techList.getByText(tech)).toBeVisible();
            }

            // check project image
            const projectImage = page.locator(`img[alt="${project.title}"]`);
            await expect(projectImage).toBeVisible();
            await expect(projectImage).toHaveAttribute('src', project.images[0]);

            // check project link
            const projectLink = page.locator(`a[href="${project.link}"]`);
            await expect(projectLink).toBeVisible();

            // click the link and verify it opens in a new tab with the correct URL
            const [newPage] = await Promise.all([
                page.waitForEvent('popup'),
                projectLink.click(),
            ]);
            await expect(newPage).toHaveURL(project.link);
        });
    });

    // // TEST FIRST PROJECT
    // test("should display first project 'Excuse Generator' with correct details", async ({ page }) => {
    //
    //     // check project ID number
    //     const projectId = page.locator('#root > div > section:nth-child(3) > div > div:nth-child(2) > div > div.flex.flex-col.justify-between.w-full.md\\:w-\\[50\\%\\].h-auto.md\\:h-\\[28rem\\] > div.flex.flex-row.justify-center.items-center.rounded-lg.text-3xl.md\\:text-4xl.font-extrabold.h-12.md\\:h-16.w-12.md\\:w-16.bg-custom-milk-chocolate-brown.text-custom-light-chocolate-brown');
    //     await expect(projectId).toContainText('01');
    //
    //     // check project title
    //     const projectTitle = page.getByRole('heading', { name: 'Excuse Generator' });
    //     await expect(projectTitle).toBeVisible();
    //
    //     // check project description
    //     const projectDescription = page.getByText('Building a simple web app that generates random excuses.', { exact: false });
    //     await expect(projectDescription).toBeVisible();
    //
    //     // check technologies
    //     const techList = page.locator('ul');
    //     await expect(techList.getByText('React.js')).toBeVisible();
    //     await expect(techList.getByText('Styled Components')).toBeVisible();
    //     await expect(techList.getByText('Netlify')).toBeVisible();
    //
    //     // check project image
    //     const projectImage = page.locator('img[alt="Excuse Generator"]');
    //     await expect(projectImage).toBeVisible();
    //     await expect(projectImage).toHaveAttribute('src', 'excuse-generator-screen.svg');
    //
    //     // check project link
    //     const projectLink = page.locator('a[href="https://github.com/lukacafuta/Excuse-Generator"]');
    //     await expect(projectLink).toBeVisible();
    //
    //     // click the link and check if it opens in a new tab and has the correct URL
    //     const [newPage] = await Promise.all([
    //         page.waitForEvent('popup'),     // wait for the new tab to open
    //         projectLink.click(),
    //     ]);
    //     await expect(newPage).toHaveURL('https://github.com/lukacafuta/Excuse-Generator');
    // });
    //
    //
    // // TEST SECOND PROJECT
    // test("should display second project 'HR Leave Management Tool' with correct details", async ({ page }) => {
    //
    //     // click "Next Project" button to navigate to second project
    //     const nextButton = page.getByRole('button', { name: 'Next Project' });
    //     await nextButton.click();
    //
    //     // check project ID number
    //     const projectId = page.locator('#root > div > section:nth-child(3) > div > div:nth-child(2) > div > div.flex.flex-col.justify-between.w-full.md\\:w-\\[50\\%\\].h-auto.md\\:h-\\[28rem\\] > div.flex.flex-row.justify-center.items-center.rounded-lg.text-3xl.md\\:text-4xl.font-extrabold.h-12.md\\:h-16.w-12.md\\:w-16.bg-custom-milk-chocolate-brown.text-custom-light-chocolate-brown');
    //     await expect(projectId).toContainText('02');
    //
    //     // check project title
    //     const projectTitle = page.getByRole('heading', { name: 'HR Leave Management Tool' });
    //     await expect(projectTitle).toBeVisible();
    //
    //     // check project description
    //     const projectDescription = page.getByText('Creating a tool where HR and team managers can handle leave requests and keep track of employee absence.', { exact: false });
    //     await expect(projectDescription).toBeVisible();
    //
    //     // check technologies
    //     const techList = page.locator('ul');
    //     await expect(techList.getByText('React.js')).toBeVisible();
    //     await expect(techList.getByText('Django')).toBeVisible();
    //     await expect(techList.getByText('Postgres')).toBeVisible();
    //     await expect(techList.getByText('Heroku')).toBeVisible();
    //     await expect(techList.getByText('Netlify')).toBeVisible();
    //     await expect(techList.getByText('DigitalOcean')).toBeVisible();
    //
    //     // check project image
    //     const projectImage = page.locator('img[alt="HR Leave Management Tool"]');
    //     await expect(projectImage).toBeVisible();
    //     await expect(projectImage).toHaveAttribute('src', 'hr-genie-screen.svg');
    //
    //     // check project link
    //     const projectLink = page.locator('a[href="https://github.com/lukacafuta/HR-Genie-Frontend"]');
    //     await expect(projectLink).toBeVisible();
    //
    //     const [newPage] = await Promise.all([
    //         page.waitForEvent('popup'),
    //         projectLink.click(),
    //     ]);
    //     await expect(newPage).toHaveURL('https://github.com/lukacafuta/HR-Genie-Frontend');
    // });
    //
    // // TEST THIRD PROJECT
    // test("should display third project 'LC Portfolio' with correct details", async ({ page }) => {
    //
    //     // click 'Next Project' button twice to navigate to the third project
    //     const nextButton = page.getByRole('button', { name: 'Next Project' });
    //     await nextButton.click();
    //     await nextButton.click();
    //
    //     // check project ID number
    //     const projectId = page.locator('#root > div > section:nth-child(3) > div > div:nth-child(2) > div > div.flex.flex-col.justify-between.w-full.md\\:w-\\[50\\%\\].h-auto.md\\:h-\\[28rem\\] > div.flex.flex-row.justify-center.items-center.rounded-lg.text-3xl.md\\:text-4xl.font-extrabold.h-12.md\\:h-16.w-12.md\\:w-16.bg-custom-milk-chocolate-brown.text-custom-light-chocolate-brown');
    //     await expect(projectId).toContainText('03');
    //
    //     // check project title
    //     const projectTitle = page.getByRole('heading', { name: 'LC Portfolio' });
    //     await expect(projectTitle).toBeVisible();
    //
    //     // check project description
    //     const projectDescription = page.getByText('This is my personal portfolio website.', { exact: false });
    //     await expect(projectDescription).toBeVisible();
    //
    //     // check technologies
    //     const techList = page.locator('ul');
    //     await expect(techList.getByText('React.js')).toBeVisible();
    //     await expect(techList.getByText('Tailwind CSS')).toBeVisible();
    //     await expect(techList.getByText('Netlify')).toBeVisible();
    //
    //     // Check project image
    //     const projectImage = page.locator('img[alt="LC Portfolio"]');
    //     await expect(projectImage).toBeVisible();
    //     await expect(projectImage).toHaveAttribute('src', 'portfolio-screen.svg');
    //
    //     // check project link
    //     const projectLink = page.locator('a[href="https://github.com/lukacafuta/Portfolio-Frontend"]');
    //     await expect(projectLink).toBeVisible();
    //
    //     const [newPage] = await Promise.all([
    //         page.waitForEvent('popup'),
    //         projectLink.click(),
    //     ]);
    //     await expect(newPage).toHaveURL('https://github.com/lukacafuta/Portfolio-Frontend');
    // });

    // TEST NAVIGATION BUTTONS
    test("should display correct theme-based navigation icons", async ({page}) => {

        // check the 'Previous Project' button icon in light mode
        const prevButtonIcon = page.locator('button[aria-label="Previous Project"] img');
        await expect(prevButtonIcon).toHaveAttribute('src', '/arrow-left-dark-brown.svg');

        // check the 'Next Project' button icon in light mode
        const nextButtonIcon = page.locator('button[aria-label="Next Project"] img');
        await expect(nextButtonIcon).toHaveAttribute('src', '/arrow-right-dark-brown.svg');

        // toggle to dark mode
        const themeToggle = page.locator('div.cursor-pointer.w-14.h-8');
        await themeToggle.click();

        // check the 'Previous Project' button icon in dark mode
        await expect(prevButtonIcon).toHaveAttribute('src', '/arrow-left-light-brown.svg');

        // check the 'Next Project' button icon in dark mode
        await expect(nextButtonIcon).toHaveAttribute('src', '/arrow-right-light-brown.svg');
    });
});