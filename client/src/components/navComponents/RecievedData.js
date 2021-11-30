import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RecievedData = ({ status, time, size, response, responseHeaders }) => {
  return (
    <div>
      <h3 className="text-3xl font-bold py-4">Responses</h3>
      <div className="  d-flex my-1 px-2  ">
        <div className="border-r-2 border-l-2 border-t-2 border-b-2
         border-gray-600 rounded-l-xl px-1 bg-gray-400">
          Size: {size}
        </div>
        <div
          data-testid="selectResponse"
          className="border-r-2 border-t-2 border-b-2 
          border-gray-600 px-1 bg-gray-200"
        >
          {" "}
          Status: {status}
        </div>
        <div className="pl-1 bg-gray-400 border-gray-800 
        border-r-2 border-t-2 border-b-2  pr-1 rounded-r-xl">
          Time: {time} ms
        </div>
      </div>
      <div>
        <Tabs
          defaultActiveKey="body"
          id="uncontrolled_tab_example"
          className="nav nav_tabs bg-yellow-200 my-2 
          rounded-lg border-yellow-600 border-4  rounded-xl  px-2"
        >
          <Tab eventKey="body" title="Body">
            <pre className="scroll">{JSON.stringify(response, null, 2)}</pre>
          </Tab>
          <Tab eventKey="response" title="RecievedData">
            <pre>{JSON.stringify(responseHeaders, null, 2)}</pre>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default RecievedData;
