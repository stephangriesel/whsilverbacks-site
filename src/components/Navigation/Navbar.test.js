import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Render navbar with the following menu items', () => {
  test('"Home"', () => {
    //Arrange
    render(<Navbar />);
    //Act

    //Assert
    const navbarItemHome = screen.getByText('home', {exact: false});
    expect(navbarItemHome).toBeInTheDocument();
  })
})