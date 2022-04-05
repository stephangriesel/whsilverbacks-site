import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Render footer', () => {
  test('with text "copyright"', () => {
    // Arrange
    render(<Footer />);
    // Act

    // Assert
    const footerTextContains = screen.getByText('copyright', {exact: false});
    expect(footerTextContains).toBeInTheDocument();
  })
})