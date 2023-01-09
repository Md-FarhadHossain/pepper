import React, { useEffect, useState } from "react";

const CounterUpdate = () => {
  const [buttonTapped, setButtonTapped] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/buttonTapped")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setButtonTapped(data);
      });
  }, []);

  return (
    <div>
      <h1 className="text-4xl mb-16 font-bold text-center ">
        Upload your logo for Update
      </h1>
      <h1> {buttonTapped?.length}</h1>
    </div>
  );
};

export default CounterUpdate;
