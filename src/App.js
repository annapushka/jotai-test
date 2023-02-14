import React from "react";
import { atom, useAtom } from "jotai";

const countAtom1 = atom(0);
const countAtom2 = atom(0);

const Counter1 = () => {
  const [count, setCount] = useAtom(countAtom1);
  const handleClick = () => setCount((c) => c + 1);

  return (
    <div>
      {count}
      <button onClick={handleClick}>+</button>
    </div>
  );
};

const Counter2 = () => {
  const [count, setCount] = useAtom(countAtom2);
  const handleClick = () => setCount((c) => c + 1);

  return (
    <div>
      {count}
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export const App = () => {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
    </div>
  );
};
