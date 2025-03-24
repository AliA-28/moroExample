import { GoogleMainPage } from "../page-object/google_main";

describe("Verify that official Moro page is accesible from Google", () => {
  it(" Visit google, type and search Morosystems", () => {
    new GoogleMainPage()
      .visitGoogle()
      .checkCookieWinHeader()
      .acceptCookies()
      .findAndWrite("MoroSystems")
      .clickSearch();
  });
});
