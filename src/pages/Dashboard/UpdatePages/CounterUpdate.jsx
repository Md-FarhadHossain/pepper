import React, { useEffect, useState } from "react";

const CounterUpdate = () => {
  const [buttonTapped, setButtonTapped] = useState([]);
  useEffect(() => {
    fetch("https://server-md-farhadhossain.vercel.app/buttonTapped")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setButtonTapped(data);
      });
  }, []);

  return (
    <div className="w-full container mx-auto lg:px-24 md:px-14 px-4 mt-16">
      <h1 className="text-4xl mb-16 font-bold text-center ">
        "Request a demo" button {buttonTapped?.length} time's clicked
      </h1>
      <h1 className="text-center text-5xl"> {buttonTapped?.length}</h1>
    </div>
  );
};

export default CounterUpdate;
