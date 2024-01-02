import React, { useState } from 'react';

const OPERATION_FN = {
  '+': (c) => c + 1,
  '-': (c) => c - 1,
  '*2': (c) => 2 * c,
  '/3': (c) => Math.round(c / 3),
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandle = (sign) => () => {
    setCounter((prevCounter) => OPERATION_FN[sign](prevCounter));
  };

  return (
    <>
      <div>
        <p>{counter}</p>
      </div>
      <section>
        <button onClick={clickHandle('+')}>+</button>
        <button onClick={clickHandle('-')}>-</button>
        <button onClick={clickHandle('*2')}>*2</button>
        <button onClick={clickHandle('/3')}>/3</button>
      </section>
    </>
  );
};

export { Counter };
