import React from "react";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/6ecf890a-20e2-43e6-8c22-f2b988ec5d2c"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900">
            Contact
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-trasparent border-2 rounded-md focus:outline-none"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          ></input>
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          ></textarea>
          <button
            type="button"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white"
          >
            Contact me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
