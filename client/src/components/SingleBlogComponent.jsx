import React from "react";
import card from "../img/card.jpg";
import { FaEdit, FaTrash } from "react-icons/fa";

const SingleBlogComponent = () => {
  return (
    <div className="w-[70%] mr-8">
      <div className="my-4">
        <img
          src={card}
          alt=""
          className="object-cover rounded-md w-full h-[500px]"
        />
      </div>
      <div className="flex justify-between items-start">
        <h3 className="font-bold font-pop text-2xl w-[80%] text-left">
          This is the title of this blogpost that also could be 2 lines or more
          than 2.
        </h3>
        <div className="flex items-center justify-between mt-2">
          <FaEdit size={24} className="text-tertiary mr-4" />
          <FaTrash size={22} className="text-red-500" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-400 font-semibold">Author : Jane Doe</p>
        <p className="text-gray-400 font-semibold">1 hour ago</p>
      </div>
      <p className="text-left mt-4 first-letter:font-serif first-letter:text-4xl first-letter:font-semibold first-letter:text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        impedit dolore nemo. Dolorum eos ea consectetur nisi distinctio veniam
        blanditiis quaerat eaque adipisci dolor error vel voluptates, nulla sit
        quod! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis dolore quas porro ab explicabo exercitationem repudiandae at,
        laudantium doloremque ipsam aliquam obcaecati facere nisi corrupti
        voluptates officia voluptatem natus doloribus error saepe. Temporibus
        ullam minima illum distinctio dolor beatae in? Dicta cupiditate incidunt
        delectus cum, ipsa mollitia. Repudiandae, dolorem numquam?
      </p>
    </div>
  );
};

export default SingleBlogComponent;
