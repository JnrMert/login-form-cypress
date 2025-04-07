describe("Login Form Tests", () => {
  // Başarılı senaryo testi
  it("successfully submits the form with valid inputs", () => {
    cy.visit("/");
    cy.get("[data-testid=email-input]").type("valid@email.com");
    cy.get("[data-testid=password-input]").type("ValidPass1");
    cy.get("[data-testid=terms-checkbox]").click();
    cy.get("[data-testid=login-button]").should("not.be.disabled");
    cy.get("[data-testid=login-form]").submit();
    cy.url().should("include", "/success");
    cy.get("[data-testid=success-page]").should("be.visible");
  });

  // Hatalı email testi
  it("shows error message for invalid email", () => {
    cy.visit("/");
    cy.get("[data-testid=email-input]").type("invalid-email");
    cy.get("[data-testid=email-error]").should("be.visible");
    cy.get("[data-testid=login-button]").should("be.disabled");
  });

  // Email ve şifre hatası testi
  it("shows error messages for invalid email and password", () => {
    cy.visit("/");
    cy.get("[data-testid=email-input]").type("invalid-email");
    cy.get("[data-testid=password-input]").type("weak");

    // İki hata mesajı olmalı
    cy.get(".error-message").should("have.length", 2);

    // Şifre hatası görünmeli
    cy.get("[data-testid=password-error]").should("be.visible");

    // Buton disabled olmalı
    cy.get("[data-testid=login-button]").should("be.disabled");
  });

  // Terms kabul edilmediği durum testi
  it("keeps button disabled when terms are not accepted", () => {
    cy.visit("/");
    cy.get("[data-testid=email-input]").type("valid@email.com");
    cy.get("[data-testid=password-input]").type("ValidPass1");

    // Şartlar kabul edilmedi, buton disabled olmalı
    cy.get("[data-testid=login-button]").should("be.disabled");
  });
});
