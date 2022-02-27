import MockAdapter from "axios-mock-adapter";
import axiosInstance from "../axios";

// This sets the mock adapter on the default instance
const mockAdapter = new MockAdapter(axiosInstance);

const setUpMock = (config, data, status = 200) => {
  // arguments for reply are (status, data, headers)
  mockAdapter.onGet(config).reply(status, data);
};

export const restore = () => {
  mockAdapter.restore();
};
const mock = { mockAdapter, setUpMock };
export default mock;
