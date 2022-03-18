import React from "react";
import card from "../img/card.jpg";

const PostCard = () => {
  return (
    <div className="flex items-center justify-center pt-8">
      <div>
        <img
          src={card}
          alt="Desktop"
          className="w-[500px] object-cover rounded-md"
        />
      </div>
      <div className="space-y-2">
        <p className="tracking-widest text-sm uppercase text-left pl-14 text-tertiary font-semibold ">
          Technology
        </p>
        <h3 className="font-bold leading-5 text-lg text-justify pl-14">
          This is the title of this blogpost that also could be 2 lines or more
          than 2.
        </h3>
        <p className="text-justify leading-6 pl-14">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ratione
          dolores quae itaque non. Nobis, inventore ipsam. Animi, vero sapiente!
        </p>
        <span className="float-left ml-14 border-b-2 font-semibold text-gray-800 border-tertiary">
          Read more
        </span>
      </div>
    </div>
  );
};

export default PostCard;
