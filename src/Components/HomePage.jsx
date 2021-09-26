import React, { useState, useEffect } from "react";

function HomePage() {
  const [number, setNumber] = useState(0);

  //ComponentDidMount
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  //ComponentDidUpdate
  useEffect(() => {
    console.log("Number Updated");
  }, [number]);

  //ComponentDidUnmount
  useEffect(() => {
    return () => console.log("Component Unmounted");
  });

  return (
    <>
      <div
        
      >
        <h1>Welcome to Demo1 Page</h1>
      </div>
      <div>
        <h1 style={{ textAlign: "left" }}>{number}</h1>
        <button onClick={() => setNumber((prev) => prev + 1)}>
          Click Me to add 1
        </button>
      </div>
    </>
  );
}
export default HomePage;