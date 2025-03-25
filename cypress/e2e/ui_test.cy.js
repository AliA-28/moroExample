import { GoogleMainPage } from "../page-object/google_main";
import { GoogleSearchResultPage } from "../page-object/google_search_result";
import { MoroSystemsMainPage } from "../page-object/morosystems_main_page";

describe("Verify that official Moro page is accesible from Google", () => {
  before(() => {
    cy.viewport(1200, 700);
  });

  it(" Visit google, type and search Morosystems", () => {
    new GoogleMainPage()
      .visitGoogle()
      .checkCookieWinHeader()
      .acceptCookies()
      .findAndWrite("MoroSystems")
      .clickSearch();
  });
  it("Google result page , click on Moro", () => {
    cy.visit("https://www.google.com/search?q=morosystems");
    new GoogleSearchResultPage()
      .verifySearchResultUrl()
      .clickOnSearchresultLink();
  });

  it("Morosystems main to careers page", () => {
    cy.on("uncaught:exception", (err, type) => {
      expect(err.message).to.include(
        "Cannot read properties of undefined (reading 'length'"
      );
      return false;
    });
    cy.visit("https://www.morosystems.cz/");
    new MoroSystemsMainPage()
      .checkAndAcceptCookies()
      .clickOnCareers()
      .findVacanciesSection()
      .locateFilterOfCities()
      .chooseBrnoFromFilter()
      .getAllvacantPositions();
  });
});
