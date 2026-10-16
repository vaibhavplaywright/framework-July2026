import { test, expect } from "../../fixture/fixture.js";
import user from "../../testdata/registrationUsersdata.json";

test("Registration test1", async ({ page, registrationPage }) => {
  await page.goto("/signup");
  // const registrationPage = new RegistrationPage(page);
  await registrationPage.userDetails(user.username, user.email, user.password);
  await registrationPage.selectInterests(user.interests);
  await registrationPage.selectGender(user.gender);
  await registrationPage.selectState(user.state);
  await registrationPage.selectHobbies(user.hobbies);
  await registrationPage.clickSignUpButton();
  expect(await registrationPage.getSuccessfulRegistrationMessage()).toContain(
    "Signup successfully, Please login!",
  );
});

test("Registration test2", async ({ page, registrationPage }) => {
  await page.goto("/signup");
  // const registrationPage = new RegistrationPage(page);
  await registrationPage.userDetails(user.username, user.email, user.password);
  await registrationPage.selectInterests(user.interests);
  await registrationPage.selectGender(user.gender);
  await registrationPage.selectState(user.state);
  await registrationPage.selectHobbies(user.hobbies);
  await registrationPage.clickSignUpButton();
  expect(await registrationPage.getSuccessfulRegistrationMessage()).toContain(
    "Signup successfully, Please login!",
  );
});
