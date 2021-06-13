import { Article } from '@/models/article';

describe('Application', () => {
  it('L\'application s\'ouvre', () => {
    cy.visit('/');

    const article = {} as Article;
  });
});
