import { expect, page } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { error } from "node:console";

export class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);
    this.page = page;
    this.usernameField = page.getByPlaceholder("Name");
    this.emailField = page.getByPlaceholder("Email");
    this.passwordField = page.getByPlaceholder("Password");
    // this.interestsField = page.getByLabel(`${interest}`);
    this.genderRadioButton1 = page.locator("#gender1");
    this.genderRadioButton2 = page.locator("#gender2");
    this.selectStateDropdown = page.locator("#state");
    this.selectHobbiesDropdown = page.locator("#hobbies");
    this.signupButton = page.getByRole("button", { name: "Sign up" });
    this.successfulRegistrationMessage = page.getByText(
      "Signup successfully, Please login!",
      { exact: true },
    );
  }
  async userDetails(username, email, password) {
    await this.fill(this.usernameField, username);
    await this.fill(this.emailField, email);
    await this.fill(this.passwordField, password);

    // await this.usernameField.fill(username);
    // await this.emailField.fill(email);
    // await this.passwordField.fill(password);
  }

  async selectInterests(interests) {
    for (const interest of interests) {
      await this.page.getByLabel(`${interest}`, { exact: true }).check();
    }
  }

  async selectGender(gender) {
    if (gender == "Male") {
      // await this.genderRadioButton1.check();
      await this.check(this.genderRadioButton1);
    } else if (gender == "Female") {
      // await this.genderRadioButton2.check();
      await this.check(this.genderRadioButton2);
    } else {
      throw error(`Invalid gender provided ${gender}`);
    }
  }

  async selectState(state) {
    // await this.selectStateDropdown.selectOption(state);
    await this.selectDropdown(this.selectStateDropdown, state);
  }

  async selectHobbies(hobby) {
    await this.selectDropdown(this.selectHobbiesDropdown, hobby);
    // await this.selectHobbiesDropdown.selectOption(hobby);
  }

  async clickSignUpButton() {
    await this.click(this.signupButton);
    // await this.signupButton.click();
  }

  async getSuccessfulRegistrationMessage() {
    return await this.captureText(this.successfulRegistrationMessage);
    // return await this.successfulRegistrationMessage.textContent();
  }
}
