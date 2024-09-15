import React, { useState } from "react";

const ConfigForm = ({ onSubmit }) => {
  const [config, setConfig] = useState({ endpoint: "", dataField: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(config);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>API Endpoint:</label>
        <input
          type="text"
          name="endpoint"
          value={config.endpoint}
          onChange={handleChange}
          required
          className="form-control"
        />
      </div>
      {/* <div className="mb-3">
        <label>Data Field:</label>
        <input
          type="text"
          name="dataField"
          value={config.dataField}
          onChange={handleChange}
          className="form-control"
        />
      </div> */}
      <button className="btn btn-primary mb-3" type="submit">
        Fetch Data
      </button>
    </form>
  );
};

export default ConfigForm;
