import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Render button', () => {
  test('render button with text "learn react"', () => {
    // Arrange
    render(<Button />)
    // Act

    // Assert
    // const buttonText = screen.getByText('Learn React', {exact: false});
    // expect(buttonText).toBeInTheDocument();
  })
})

