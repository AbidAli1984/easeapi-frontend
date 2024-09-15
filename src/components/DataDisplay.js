import React, { useEffect, useState } from "react";
import { addConfiguration } from "../api/easeapiService";

const DataDisplay = ({ data, config }) => {
  const [fields, setFields] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setFields([]);
  }, data);

  const onFieldSelect = (field) => {
    if (field.target.checked) {
      setFields([...fields, field.target.attributes["data-field"].value]);
    } else {
      setFields(
        fields.filter((x) => x != field.target.attributes["data-field"].value)
      );
    }
  };

  const handleAddConfiguration = async () => {
    debugger;
    let data = {
      name: name,
      url: config.endpoint,
      fields: fields,
    };
    const response = await addConfiguration(data);
  };

  if (!typeof data === Object)
    return <div className="row">Invalid Information</div>;

  return (
    <div className="card  mb-4">
      <div className="card-header">
        <h2>Response Data</h2>
      </div>
      <div className="row m-0 p-3">
        <div className="mb-3">
          <label>API Endpoint:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            className="form-control"
          />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Field</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((key) => {
              let data1 = data[key];
              return typeof data1 === "object" ? (
                Object.keys(data1).map(
                  (key1) =>
                    typeof data1[key1] != "object" && (
                      <tr value={key1}>
                        <td>
                          <input
                            className="form-check"
                            type="checkbox"
                            data-field={key1}
                            onChange={onFieldSelect}
                          />
                        </td>
                        <td className="fw-bold">{key1}</td>
                        <td>{data1[key1]}</td>
                      </tr>
                    )
                )
              ) : (
                <tr value={key}>
                  <td>
                    <input
                      className="form-check"
                      type="checkbox"
                      data-field={key}
                      onChange={onFieldSelect}
                    />
                  </td>
                  <td className="fw-bold">{key}</td>
                  <td>{data1}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          className="btn btn-primary w-100 mb-2"
          onClick={handleAddConfiguration}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default DataDisplay;
