import { MoroSystemCareersPage } from "./morosystems_careers_page";

export class MoroSystemsMainPage {
  constructor() {
    this.cookieAcceptHeader = "#cookiescript_header";
    this.cookieAcceptButton = "#cookiescript_accept";

    this.careerLink = {
      element: "a[href='/kariera/']",
      text: "Kariéra",
    };
    this.url = {
      element: "a[href='/']",
      text: "Morosystems",
    };
  }
  checkAndAcceptCookies() {
    cy.intercept("https://crossdomain.cookie-script.com/getCookie").as(
      "cookie header"
    );
    cy.wait("@cookie header")
      .get(this.cookieAcceptHeader, { timeout: 10000 })
      .should("be.visible");
    cy.get(this.cookieAcceptButton).should("be.visible").click();
    return this;
  }

  clickOnCareers() {
    //cy.get(this.hiddenMenu).should("be.visible").click();
    cy.get(this.careerLink.element)
      .contains(this.careerLink.text)
      .scrollIntoView();
    cy.get(this.careerLink.element).contains(this.careerLink.text).click();
    return new MoroSystemCareersPage();
  }
}
