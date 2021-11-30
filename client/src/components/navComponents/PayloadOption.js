import React from 'react';
import AddRemoveForm from '../formComponents/AddRemoveForm';
import locale from "react-json-editor-ajrm/locale/en";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JSONInput from "react-json-editor-ajrm";

const PayloadOption = ({ values, setJSON }) => {
  return (
    <Tabs
      defaultActiveKey="query-params"
      id="uncontrolled-tab-example"
      className="mb-3 bg-indigo-200 border-purple-600 border-4  rounded-xl  p-2 "
    >
      <Tab className="hover:bg-yellow-200 border-red-600 border-2  rounded py-1 px-2 my-1 "
        eventKey="query-params" title="Query Params">
        <AddRemoveForm values={values} data_name="query_data" />
      </Tab>
      <Tab className="hover:bg-pink-200 border-red-600 border-2  rounded py-1 px-2 my-1 "
        eventKey="headers" title="Headers">
        <AddRemoveForm values={values} data_name="header_data" />
      </Tab>
      <Tab className="hover:bg-yellow-400 bg-yellow-200  border-red-600
       border-2 border-l rounded-xl py-4 px-4 mr-1 my-1 "
        eventKey="json" title="JSON">
        <JSONInput
          id="_id"
          locale={locale}
          onChange={(data) => setJSON(data.jsObject)}
          height="30vh"
          width="100%"
        />
      </Tab>
    </Tabs>
  );
}

export default PayloadOption;