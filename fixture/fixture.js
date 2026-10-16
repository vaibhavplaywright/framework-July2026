import { test as base } from "@playwright/test";
import { RegistrationPage } from "../pages/RegistrationPage.js";

export const test = base.extend({
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page); // Creating as object of RegistrationPage class
    await use(registrationPage);
  },
});
export { expect } from "@playwright/test";
