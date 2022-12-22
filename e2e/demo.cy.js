/// <reference types="Cypress" />
import { HomePage } from "../pages/homePage";

const homePage = new HomePage();

describe("Check ALT-tags", () => {
  before(function () {
    cy.writeFile("result.txt", "");
  });

  it("Verify Alt", () => {
    homePage.goHomePage().verifyImage("Home");
    homePage.goHomePage().goToSubPage("Shop").verifyImage("Shop");
    homePage.goHomePage().goToSubPage("Experiences").verifyImage("Experiences");
    homePage.goHomePage().goToSubPage("Locations").verifyImage("Locations");
    homePage.goHomePage().goToSubPage("Origins").verifyImage("Origins");
    homePage.goHomePage().goToSubPage("Corporate").verifyImage("Corporate");
    homePage.goHomePage().goToSubPage("About").verifyImage("About");
  });
});
