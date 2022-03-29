import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestButton from './TestButton';

describe('Test button', () => {
  test('renders button with "learn react" text', () => {
    // Arrange
    render(<TestButton />)

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // Assert
    const buttonText = screen.getByText('Learn React', {exact: true});
    expect(buttonText).toBeInTheDocument();
  })
})