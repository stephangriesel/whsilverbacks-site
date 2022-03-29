import { render, screen } from '@testing-library/react'
import App from './App';
import { mount } from '@cypress/react';

// Unit test

// describe('App component', () => {
//   test('Render something on app component so this unit test passes', () => {
//     // Arrange
//     render(<App />)
//     // Action
//     // .. do nothing
//     // Assert
//     // .. do nothing, might add later
//   })
// })

// Integration test

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Learn React');
});