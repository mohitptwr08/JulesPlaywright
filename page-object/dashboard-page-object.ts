import { Locator } from '@playwright/test';
import { Page } from 'playwright';

export class DashboardPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Elements
    get addPurchaseButton(): Locator {
        return this.page.locator("//span[.='Add a purchase']/parent::button");
    }
}
