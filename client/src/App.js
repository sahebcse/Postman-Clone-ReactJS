import React,{useState} from 'react';
import PayloadOption from './components/navComponents/PayloadOption';
import axios from 'axios';
import {Formik,Form} from "formik";
import TopNav from './components/navComponents/TopNav';
import prettyBytes from 'pretty-bytes';
import RecievedData from './components/navComponents/RecievedData';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './index.css';

function App() {
  const [time, setTime] = useState(0);
  const [json, setJSON] = useState({});
  const [status, setStatus] = useState(0);
  const [size, setSize] = useState(0);
  const [responseHeaders, setResponseHeaders] = useState({});
  const [response, setResponse] = useState({});

  axios.interceptors.request.use((request) => {
    console.log("request:", request);
    request.customData = request.customData || {};
    request.customData.startTime = new Date().getTime();
    return request;
  });

  function updateEndTime(response) {
    // defaulting custom data
    //console.log(response);
    if (response !== undefined) {
      response.customData = response.customData || {};
      // setting the time
      response.customData.time =
        new Date().getTime() - response.config.customData.startTime;
      return response;
    }
  }

  axios.interceptors.response.use(updateEndTime, (e) => {
    return Promise.reject(updateEndTime(e.response));
  });

  function keyValuePairsToObjects(container) {
     
    var params = {};
    container.forEach((data) => {
      params[data["key"]] = data["value"];
    });
     
    return params;
  }

  function sendRequest(data){
    let dataJson;
    try{
      dataJson = json;
    } catch(e){
      alert("JSON data is not proper");
      return;
    }

    axios({
      url:data.url,
      method:data.method,
      params : keyValuePairsToObjects(data.query_data),
      headers: keyValuePairsToObjects(data.header_data),
      dataJson,
      validateStatus: () => true
    })
    .catch((e)=>console.log(e))
    .then((response)=>{
      console.log(response);  

      if (response !== undefined) {
        //console.log("RESPONSE:", response);
        setStatus(response.status);
        setResponse(response.data);
        setResponseHeaders(response.headers);
        setTime(response.customData.time);
        setSize(
          prettyBytes(
            JSON.stringify(response.data).length +
              JSON.stringify(response.headers).length
          )
        );
      }
    })
  }
  return (
    <>
    <div className="p-4">
        <div>
          <Formik
            initialValues={{
              url: "https://reqres.in/api/users/2",
              header_data: [{}],
              query_data: [{}],
              method: "GET",
            }}
            onSubmit={(details) => {
            // console.log("details:", details);
              sendRequest(details);
            }}
          >
            {({ values }) => (
              <Form>
                  <TopNav/>
                  <PayloadOption values = {values} setJSON={setJSON}/>
              </Form>
            )}
          </Formik>
        </div>
        <RecievedData 
          time = {time}
          response = {response}
          responseHeaders = {responseHeaders}
          size = {size}
          status={status}
        />
    </div>
  </>
  );
}

export default App;
