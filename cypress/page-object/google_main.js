import { GoogleSearchResultPage } from "./google_search_result";

export class GoogleMainPage {
  constructor() {
    this.url = "https://www.google.com/";
    this.popUpHeader = {
      element: "h1",
      text: "Než budete pokračovat na Google",
    };
    this.acceptButton = {
      element: "button",
      text: "Přijmout vše",
    };
    this.searchInputField = "#APjFqb";
    this.searchButton = "input[value='Hledat Googlem']:visible";
  }

  visitGoogle() {
    cy.visit(this.url);
    return this;
  }

  checkCookieWinHeader() {
    cy.get(this.popUpHeader.element).contains(this.popUpHeader.text);
    return this;
  }

  acceptCookies() {
    cy.get(this.acceptButton.element)
      .contains(this.acceptButton.text)
      .scrollIntoView()
      .click();
    return this;
  }

  findAndWrite(searchText) {
    cy.get(this.searchInputField).type(searchText).type("{esc}"); //"{esc}" is for unfocusing dropdown of possible result and unhiding Search button
    return this;
  }

  clickSearch() {
    cy.get(this.searchButton).click();
    return new GoogleSearchResultPage();
  }
}
