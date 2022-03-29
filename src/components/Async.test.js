import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('Check if posts are rendering correctly', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({ // mocked data
      json: async () => [{id: 'p1', title: 'First Post'}]
    });
    // Arrange
    render(<Async />)

    // Act 
    // .. rendering sufficient

    // Assert
    // Roles doc: https://www.w3.org/TR/html-aria/#docconformance
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
    
  });
})