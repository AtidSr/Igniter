import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const axiosInstance = axios.create();
// This sets the mock adapter on the default instance
const mockAdapter = new MockAdapter(axiosInstance);

const setUpMock = (config, data, status = 200) => {
  // arguments for reply are (status, data, headers)
  mockAdapter.onGet(config).reply(status, data);
};

const mock = { mockAdapter, setUpMock };
export const api = axiosInstance;
export default mock;
