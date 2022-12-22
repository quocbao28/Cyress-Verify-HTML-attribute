export class HomePage {
  constructor() {
    this.image = "body img";
    this.subPage = "div a[class='site-header__toolbar-link toolbar__menulink']";
  }

  goHomePage() {
    cy.clearCookies();
    cy.visit("/");
    return this;
  }

  goToSubPage(page) {
    cy.get(this.subPage).contains(page).click();
    cy.wait(5000);
    cy.get(".site-footer").scrollIntoView().should("be.visible");
    return this;
  }

  verifyImage(pageName) {
    const srcArray = [];
    cy.get(this.image).each(($el) => {
      const alt = $el.attr("alt");
      const src = $el.attr("src");
      const dataSrc = $el.attr("data-src");
      const srcset = $el.attr("srcset");

      if (alt === undefined || alt === false) {
        let srcA;
        if (src) {
          cy.log(src);
          srcA = src;
        } else if (dataSrc) {
          cy.log(dataSrc);
          srcA = dataSrc;
        } else if (srcset) {
          cy.log(srcset);
          srcA = srcset;
        }
        srcArray.push(srcA);
      }
    });
    // cy.log();
    cy.wrap(srcArray).then((srcArray) => {
      if (srcArray.length > 0) {
        cy.writeFile(
          "reports/result.txt",
          { pageName: pageName, src: srcArray },
          { flag: "a+" }
        );
      }
    });
  }
}
