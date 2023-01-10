import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const UpdateHeading = () => {
  const [heading, setHeading] = useState("");

  useEffect(() => {
    fetch("https://server-md-farhadhossain.vercel.app/heading")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setHeading(data?.heading);
      });
  }, []);

  // handle Sumbit
  const handleSubmit = (event) => {
    event.preventDefault();
    const headingValue = event.target.heading.value;
    const result = {
      heading: headingValue,
    };
    console.log(heading);

    fetch("https://server-md-farhadhossain.vercel.app/heading/63bc591f461922059d5804d0", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          toast.success('Heading Saved Successfully!')
        }
      });
  };

  return (
    <div className="w-full container mx-auto lg:px-24 md:px-14 px-4 mt-16">
      <h1 className="text-4xl mb-16 font-bold text-center ">
        Update the Heading
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full container mx-auto lg:px-24 md:px-14 px-4 mt-16"
      >
        <input
          name="heading"
          className="input input-bordered w-full"
          type="text"
          defaultValue={heading}
        />
        <div className="text-end mt-4">
          <button className="btn">Save</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateHeading;
