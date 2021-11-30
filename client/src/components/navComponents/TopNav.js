import React from "react";
import { Formik, Form, Field } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNav = () => {
  return (
    <div className="form-group">
      <div className="border border-gray-300 mb-4 text-sm md:text-xl flex items-center justify-between p-1">
        <Field
          data-testid="selectBox"
          className="text-center py-2 border-3 border-gray-800
                   rounded-full text-gray-600  bg-white hover:border-gray-400    
                     "
          name="method"
          as="select"
        >
          <option className=" bg-pink-500 " value="GET">
            {" "}
            GET{" "}
          </option>
          <option className=" bg-green-400  " value="POST">
            {" "}
            POST{" "}
          </option>
          <option className=" bg-yellow-400  " value="PUT">
            {" "}
            PUT{" "}
          </option>
          <option className="bg-red-500  " value="DELETE">
            {" "}
            DELETE{" "}
          </option>
        </Field>

        <Field
          data-testid="selectInput"
          required
          type="url"
          name="url"
          placeholder="https://reqres.in/api/users/2"
          className="bg-gray-100 p-2 ml-1 rounded-lg border-2 border-red-500 shadow-md
                     focus:outline-none focus:border-red-600 w-full "
        />
        <div>
          <button
            data-testid="selectBtn"
            className="bg-purple-600 font-semibold text-white 
                    p-2 md:px-8  rounded-full hover:bg-purple-700 focus:outline-none focus:ring 
                    shadow-lg hover:shadow-none transition-all duration-300 m-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
