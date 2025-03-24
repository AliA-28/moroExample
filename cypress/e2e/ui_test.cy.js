import { GoogleMainPage } from "../page-object/google_main";
import { GoogleSearchResultPage } from "../page-object/google_search_result";
import { MoroSystemCareersPage } from "../page-object/morosystems_careers_page";
import { MoroSystemsMainPage } from "../page-object/morosystems_main_page";

describe("Verify that official Moro page is accesible from Google", () => {
  before(() => {
    cy.viewport(1280, 570);
  });

  it(" Visit google, type and search Morosystems", () => {
    new GoogleMainPage()
      .visitGoogle()
      .checkCookieWinHeader()
      .acceptCookies()
      .findAndWrite("MoroSystems")
      .clickSearch();
  });
  it("Google to Moro", () => {
    cy.visit("https://www.google.com/search?q=morosystems");
    new GoogleSearchResultPage()
      .verifySearchResultUrl()
      .clickOnSearchresultLink();
  });

  it("Morosystems main to careers page", () => {
    cy.visit("https://www.morosystems.cz/");
    new MoroSystemsMainPage().checkAndAcceptCookies().clickOnCareers();
  });
  it("Careers", () => {
    cy.visit("https://www.morosystems.cz/kariera/");
    new MoroSystemCareersPage()
      .findVacanciesSection()
      .locateFilterOfCities()
      .chooseBrnoFromFilter()
      .getAllvacantPositions();
  });
});
