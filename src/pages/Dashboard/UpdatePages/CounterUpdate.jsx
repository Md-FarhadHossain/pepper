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
    <div className="w-full container mx-auto px-24 mt-16">
      <h1 className="text-4xl mb-16 font-bold text-center ">
      "Request a demo" button {buttonTapped?.length} time's clicked
      </h1>
      <h1 className="text-center text-5xl"> {buttonTapped?.length}</h1>
    </div>
  );
};

export default CounterUpdate;
