import React, { useState } from "react";
import "./App.css";
import ConfigForm from "./components/ConfigForm";
import DataDisplay from "./components/DataDisplay";
import { fetchCustomizedData } from "./api/easeapiService";

function App() {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);

  const handleFetchData = async (config) => {
    try {
      const result = await fetchCustomizedData(config);
      debugger;
      if (result && result.length && result.length > 0) setData(result[0]);
      else setData(result);
      setConfig(config);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1 className="py-3 p-5 mb-5 text-center bg-dark bg-gradient text-white">
        EaseAPI
      </h1>
      <div className="container">
        <ConfigForm onSubmit={handleFetchData} />
        {data && <DataDisplay data={data} config={config} />}
      </div>
    </div>
  );
}

export default App;
