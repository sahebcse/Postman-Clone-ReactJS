import React from "react";
import { Field, FieldArray } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";

const AddRemoveForm = ({ values, data_name }) => {
  return (
    <FieldArray name={data_name}>
      {(arrayHelpers) => (
        <div>
          {values[`${data_name}`].map((info, index) => {
            return (
              <div className="input-group my-2" key={index}>
                <Field
                  placeholder="Key"
                  name={`${data_name}.${index}.key`}
                  type="input"
                  className="form-control hover:bg-purple-300 "
                />
                <Field
                  placeholder="Value"
                  name={`${data_name}.${index}.value`}
                  type="input"
                  className="form-control hover:bg-indigo-300 "
                />
                <button
                  className="ml-2 px-4 py-1 hover:bg-red-600 bg-gray-200 text-red-600 transition ease-in 
                  duration-200 uppercase rounded-full  hover:text-white border-2 border-gray-900 focus:outline-none"
                  onClick={() => arrayHelpers.remove(index)}
                >
                  Remove
                </button>
              </div>
            );
          })}
          <button
            className="m-2 px-4 py-1 bg-gray-200 text-green-600  transition ease-in duration-200
             uppercase rounded-full hover:bg-green-600 hover:text-white border-2 border-gray-900 focus:outline-none"
            onClick={() => arrayHelpers.push({})}
          >
            Add
          </button>
        </div>
      )}
    </FieldArray>
  );
};

export default AddRemoveForm;
