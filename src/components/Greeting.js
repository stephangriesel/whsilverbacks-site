import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }
  return (
    <div>
    <h2>Hello</h2>
    {!changedText && <Output>Not sure how we feel about the day?</Output>}
    {changedText && <Output>What a lovely day!</Output>}
    <button onClick={changeTextHandler}>Change Text</button>
  </div>
  )
};

export default Greeting;