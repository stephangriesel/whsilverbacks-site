import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

describe('Greeting Component', () => { // test suite start
  test('Confirm that hello is rendered', () => {
    //Arrange: Set Up Test Data
    render(<Greeting />);
  
    //Act: Run Logic
  
  
    //Assert: Compare execution results
    const helloElement = screen.getByText('Hello', {exact: true});
    expect(helloElement).toBeInTheDocument();
  
  });
})

