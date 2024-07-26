import { test as base } from '@playwright/test';
import { LoginPage } from '../page-object/login-page-object';
import { DashboardPage } from '../page-object/dashboard-page-object';

type MyFixtures = {
    loginPage: LoginPage;
    dashBoardPage: DashboardPage;
};

// Extend basic test by providing a "loginPage" fixture.
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashBoardPage: async ({ page }, use) => {
        const dashBoardPage = new DashboardPage(page);
        await use(dashBoardPage);
    }
});

export { expect } from '@playwright/test';