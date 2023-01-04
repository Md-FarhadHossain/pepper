import React from "react";
import "./Review.css";
const Reviews = () => {
  const breakings = [
    {
      id: 1,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 1,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 2,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 3,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 4,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 5,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 5,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 6,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 6,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 8,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 9,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
  ];
  const breakings2 = [
    {
      id: 1,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 2,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 3,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 4,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 5,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 5,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 6,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 6,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
    {
      id: 8,
      title:
        "Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.",
    },
  ];

  return (
    <div className="grid gap-[2.625rem]">
      <div className=" -translate-x-32">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          
          className="flex gap-[2.625rem]"
        >
          {breakings.map((breaking) => (
            <div
              className="slide shadow-2xl shadow-[#15153115]"
              key={breaking.id}
            >
              <div className="py-10 px-8 gap-3 bg-white w-[520px] h-[290px] rounded-[1.875rem]">
                <p className="text-black text-[1.375rem] max-w-max">
                  {breaking.title}
                </p>

                <div className="rating mt-[1.537rem] mb-[1.563rem]">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                </div>

                {/* Autor */}
                <div>
                  <p className="text-xl font-bold">Ronald Richards</p>
                  <small>CEO- Utlta</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="flex gap-[2.625rem]"
        >
          {breakings2.map((breaking) => (
            <div
              className="slide shadow-2xl shadow-[#15153115]"
              key={breaking.id}
            >
              <div className="py-10 px-8 gap-3 bg-white w-[520px] h-[290px] rounded-[1.875rem]">
                <p className="text-black text-[1.375rem] max-w-max">
                  {breaking.title}
                </p>

                <div className="rating mt-[1.537rem] mb-[1.563rem]">
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                  <input
                    type="radio"
                    name="rating-5"
                    className="mask mask-star-2 bg-[#00F59B]"
                  />
                </div>

                {/* Autor */}
                <div>
                  <p className="text-xl font-bold">Ronald Richards</p>
                  <small>CEO- Utlta</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
