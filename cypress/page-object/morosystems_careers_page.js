export class MoroSystemCareersPage {
  constructor() {
    this.locationDropDown = ".inp-custom-select__select";
    this.brnoLocation = "label[data-filter='Brno']";
    this.vacanciesSection = ".c-positions__tools";
    this.vacancies = "ul.c-positions__wrap > li";
    this.cookieAcceptHeader = "#cookiescript_header";
    this.cookieAcceptButton = "#cookiescript_accept";
  }
  l;
  findVacanciesSection() {
    cy.get(this.vacanciesSection).scrollIntoView();
    return this;
  }

  locateFilterOfCities() {
    cy.get(this.locationDropDown).scrollIntoView();
    cy.get(this.locationDropDown).click();
    return this;
  }

  chooseBrnoFromFilter() {
    cy.get(this.brnoLocation).click();
    return this;
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

  getAllvacantPositions() {
    cy.get(this.vacancies).each(($li) => {
      cy.log($li.text());
    });
  }
}
