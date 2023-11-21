import React, { useState } from "react";

const Form = ({ toggleModal, isFormOpen }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`bg-opacity-70 bg-black p-4 rounded-md w-64 mx-auto shadow-md text-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-1 
      `}
    >
      <img
        src="icon-close.svg"
        alt=""
        className="ml-auto cursor-pointer"
        onClick={toggleModal}
      />
      <form className="flex flex-col">
        <label className="mb-2" htmlFor="firstName">
          <h2>First Name:</h2>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          className="p-2 mb-3 border-none rounded-md bg-opacity-50 text-black"
        />

        <label className="mb-2" htmlFor="lastName">
          <h2>Last Name:</h2>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          className="p-2 mb-3 border-none rounded-md bg-opacity-50 text-black"
        />

        <label className="mb-2" htmlFor="email">
          <h2>Email:</h2>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="p-2 mb-3 border-none rounded-md bg-opacity-50 text-black"
        />
      </form>
    </div>
  );
};

export default Form;
