import { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  }
  return (
    <div>
    <h2>Hello</h2>
    {!changedText && <p>Not sure how we feel about the day?</p>}
    {changedText && <p>What a lovely day!</p>}
    <button onClick={changeTextHandler}>Change Text</button>
  </div>
  )
};

export default Greeting;