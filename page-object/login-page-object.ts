import { Locator } from '@playwright/test';
import { Page } from 'playwright';

export class LoginPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Elements
  get emailInput(): Locator {
    return this.page.locator('input[name="email"]');
  }

  get passwordInput(): Locator {
    return this.page.locator('input[name="password"]');
  }

  get logInButton(): Locator {
    return this.page.getByRole('button', { name: 'Log in' });
  }

  get signInMicrosoftButton(): Locator {
    return this.page.getByRole('button', { name: 'Login with Microsoft' });
  }

  get signInGoogleButton(): Locator {
    return this.page.getByRole('button', { name: 'Login with Google' });
  }

  get togglePasswordVisibilityButton(): Locator {
    return this.page.getByRole('button', { name: /toggle password visibility/i });
  }

  get errorMessage(): Locator {
    return this.page.locator('[data-test-id="toaster-message"]');
  }

  validationMessage = (fieldName: string) => this.page.locator(`//label[text()='${fieldName}']/../following-sibling::div[text()='Required']`);

  // Actions
  public enterEmail = async (email: string) => {
    await this.emailInput.fill(email);
  };

  public enterPassword = async (password: string) => {
    await this.passwordInput.fill(password);
  };

  public clickOnSignInButton = async () => {
    await this.logInButton.click();
  };

  public clickOnSignInMicrosoftButton = async () => {
    await this.signInMicrosoftButton.click();
  };

  public clickOnSignInGoogleButton = async () => {
    await this.signInGoogleButton.click();
  };

  public toggleVisibility = async () => {
    await this.togglePasswordVisibilityButton.click();
  };
}
