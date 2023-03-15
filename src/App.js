import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword((event.target.value));

  useEffect(() => {
    console.log("First Loade!!!");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 4) {
      console.log("keyword = ", keyword);
    }
  }, [keyword]);

  
  
  return (
    <div>
      <input type="text" onChange={onChange} placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click!!!</button>
    </div>
  );
}

export default App;
