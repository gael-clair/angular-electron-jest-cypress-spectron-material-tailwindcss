describe('Home page', () => {
  const baseUrl = 'http://localhost:4200';

  it('should works', () => {
    cy.visit(baseUrl);
    cy.contains('home works');
  });
});
