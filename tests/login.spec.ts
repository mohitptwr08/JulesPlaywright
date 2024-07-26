import * as credentials from '../payload/credentials.json';
import { dashboardURL } from '../config';
import { expect, test } from '../fixture/pom';

test.describe('Login Tests', () => {

  test('Verify user logged in succesfully', async ({ page, loginPage, dashBoardPage }) => {

    await test.step('Step 1: Navigate to Login Page and enter valid email id and password then click on Login button', async () => {
      await page.goto("/");
      await loginPage.enterEmail(credentials.valid.email);
      await loginPage.enterPassword(credentials.valid.password);
      await loginPage.clickOnSignInButton();
    })

    await test.step('Step 2: Verify dashboard page Url and Add purchase button displayed', async () => {
      await expect(page).toHaveURL(dashboardURL);
      await expect(dashBoardPage.addPurchaseButton).toBeVisible();
    })
  });

  test('Verify error message displayed when user enter invalid password', async ({ page, loginPage }) => {

    await test.step('Step 1: Navigate to Login Page and enter valid email id and invalid password then click on Login button', async () => {
      await page.goto("/");
      await loginPage.enterEmail(credentials.invalidPassword.email);
      await loginPage.enterPassword(credentials.invalidPassword.password);
      await loginPage.clickOnSignInButton();
    })


    await test.step('Verify error message displayed', async () => {
      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toHaveText("Your email and/or password are incorrects");
    })
  });

  test('Verify error message displayed when user enter invalid email', async ({ page, loginPage }) => {

    await test.step('Step 1: Navigate to Login Page and enter invalid email id and valid password then click on Login button', async () => {
      await page.goto("/");
      await loginPage.enterEmail(credentials.invalidEmail.email);
      await loginPage.enterPassword(credentials.invalidEmail.password);
      await loginPage.clickOnSignInButton();
    })

    await test.step('Verify error message displayed', async () => {
      await expect(loginPage.errorMessage).toBeVisible();
      await expect(loginPage.errorMessage).toHaveText("Your email and/or password are incorrects");
    })
  });

  test('Verify validation message displayed when user do not enter email id and password', async ({ page, loginPage }) => {

    await test.step('Step 1: Navigate to Login Page and click on Login button', async () => {
      await page.goto("/");
      await loginPage.clickOnSignInButton();
    })

    await test.step('Step 2: Verift validation message displayed for email id and password', async () => {
      await expect(loginPage.validationMessage('Email')).toBeVisible();
      await expect(loginPage.validationMessage('Password')).toBeVisible();
    })
  });
});
