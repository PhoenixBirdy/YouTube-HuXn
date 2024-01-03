import React, { useState } from 'react';
import { PROJECT1_OPERATIONS, DEC_1, MUL_2, DIV_3, INC_1 } from '../constants';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const clickHandle = (sign) => () => {
    setCounter((prevCounter) => PROJECT1_OPERATIONS[sign](prevCounter));
  };

  return (
    <>
      <div>
        <h1>Project Counter</h1>
        <p>{counter}</p>
      </div>
      <section>
        <button onClick={clickHandle(INC_1)}>+</button>
        <button onClick={clickHandle(DEC_1)}>-</button>
        <button onClick={clickHandle(MUL_2)}>*2</button>
        <button onClick={clickHandle(DIV_3)}>/3</button>
      </section>
    </>
  );
};

export { Counter };
