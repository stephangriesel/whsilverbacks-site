import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeting from './Greeting'

describe('Greeting Component', () => { // test suite start
  test('render Hello as text', () => {
    //Arrange: Set Up Test Data
    render(<Greeting />);
  
    //Act: Run Logic
  
  
    //Assert: Compare execution results
    const helloElement = screen.getByText('Hello', {exact: true});
    expect(helloElement).toBeInTheDocument();
  });
  test('renders question if you not sure how you feel about your day', () => {
    //Arrange: Set Up Test Data
    render(<Greeting />);
  
    //Act: Run Logic
  
  
    //Assert: Compare execution results
    const greetingText = screen.getByText('Not sure how we feel about the day?', {exact: true});
    expect(greetingText).toBeInTheDocument();
  
  });
  test('renders different feeling about the day once clicked', () => {
    //Arrange: Set Up Test Data
    render(<Greeting />);
  
    //Act: Run Logic
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
  
    //Assert: Compare execution results
    const greetingText = screen.getByText('lovely day!', {exact: false});
    expect(greetingText).toBeInTheDocument();
  
  });
  test('does not render default text', () => {
    //Arrange: Set Up Test Data
    render(<Greeting />);
  
    //Act: Run Logic
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
  
    //Assert: Compare execution results
    const greetingText = screen.queryByText('Not sure how we feel about the day?', {exact: true});
    expect(greetingText).toBeNull();
  });
})

