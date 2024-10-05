import React from "react";

const Service = ({ service }) => {
  const { massage, content, price } = service;

  return (
    <div className="border-2 w-full h-full border-yellow-200 bg-black-200 rounded-lg grid grid-rows-4 gap-8 mt-10 ">
      <strong className="mx-10 my-10 row-span-1 text-2xl lg:text-5xl">
        {massage}
      </strong>
      <p className="mx-10 row-span-2 text-xl lg:text-3xl">{content}</p>
      <div className="mx-10 row-span-1 text-md lg:text-3xl">
        {price.map((p, i) => (
          <p key={i}>
            {p.duration} --- {p.cost}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Service;
