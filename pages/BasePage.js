import { test } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async fill(locator, text) {
    await locator.fill(text);
  }

  async selectDropdown(locator, text) {
    await locator.selectOption(text);
  }

  async check(locator) {
    await locator.check();
  }

  async click(locator) {
    await locator.click();
  }

  async uploadfile(locator, filePath) {
    await locator.setInputFiles(filePath);
  }

  async captureText(locator) {
    await locator.waitFor({ state: "visible" });
    return await locator.textContent();
  }
}
