import { MoroSystemsMainPage } from "./morosystems_main_page";

export class GoogleSearchResultPage {
  constructor() {
    this.moroSystemresultOnGooglePage = {
      element: "div[role='heading']",
      text: "MoroSystems",
    };
  }

  verifySearchResultUrl() {
    cy.location()
      .its("href")
      .should("include", "https://www.google.com/search?q=morosystems");
    return this;
  }
  clickOnSearchresultLink() {
    cy.get(this.moroSystemresultOnGooglePage.element)
      .contains(this.moroSystemresultOnGooglePage.text)
      .click(); //make parametrizable
    return new MoroSystemsMainPage();
  }
}
