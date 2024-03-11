import { useState } from "react";

export const Greetings = () => {
  const [changeText, setChangeText] = useState(false);

  const changeTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>Hello, World!</h1>
      {!changeText && <p>It's good to see you!</p>}
      {changeText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
};
