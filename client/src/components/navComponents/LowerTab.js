import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field, FieldArray } from "formik";

const LowerTab = (props) => {
  const whichData = props.which_data;
  console.log(whichData);
  return (
    <div>
      {props.values.query_data.map((info, index) => {
        return (
          <div className="input-group my-2" key={index}>
            <Field
              placeholder="Key"
              name={`${props.which_data}.${index}.key`}
              type="input"
              className="form-control"
            />
            <Field
              placeholder="Value"
              name={`${props.which_data}.${index}.value`}
              type="input"
              className="form-control"
            />
            <button
              className="btn btn-outline-danger"
              onClick={() => props.arrayHelpers.remove(index)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn btn-primary mt-2 mb-5"
        onClick={() => props.arrayHelpers.push({})}
      >
        {" "}
        Add{" "}
      </button>
    </div>
  );
};

export default LowerTab;
