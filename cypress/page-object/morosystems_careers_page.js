export class MoroSystemCareersPage {
  constructor() {
    this.locationDropDown = ".inp-custom-select__select";
    this.brnoLocation = "label[data-filter='Brno']";
    this.vacanciesSection = ".c-positions__title";
    this.vacancies = "a[data-event-category='Pozice']";
    this.cookieAcceptHeader = "#cookiescript_header";
    this.cookieAcceptButton = "#cookiescript_accept";
  }
  l;
  findVacanciesSection() {
    cy.get(this.vacanciesSection).scrollTo("center");
    return this;
  }

  locateFilterOfCities() {
    cy.get(this.locationDropDown).scrollTo("center");
    cy.get(this.locationDropDown).click();
    cy.get(this.brnoLocation).click();
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
    let vacanciesLinks = [];
    let links = cy.get(this.vacancies);
    for (let i = 0; i < links.lenght; i++) {
      vacanciesLinks.push(links[i].href);
      console.log(vacanciesLinks);
    }
  }
}
