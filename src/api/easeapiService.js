import axios from "axios";

const API_BASE_URL = "http://localhost:5287/api";

export const fetchCustomizedData = async (config) => {
  try {
    debugger;
    const response = await axios.get(config.endpoint);
    return response[config.dataField || "data"];
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const addConfiguration = async (data) => {
  try {
    debugger;
    const response = await axios.post(
      `${API_BASE_URL}/EaseAPI/AddApiConfiguration`,
      data
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
