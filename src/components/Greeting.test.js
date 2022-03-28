import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'

test('Confirm that hello is rendered', () => {
  // the three a's, arrange (set up test data), act (run logic) & assert (compare execution results)

  //Arrange
  render(<Greeting />);

  //Act


  //Assert
  const helloElement = screen.getByText('Hello', {exact: true});
  expect(helloElement).toBeInTheDocument();

});