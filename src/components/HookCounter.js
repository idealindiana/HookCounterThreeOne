import React, { useCallback, useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0); // arr destructuring which is a feature in ES6

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count{count}</button>
    </div>
  );
}

export default HookCounter;
