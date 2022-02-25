import { ENDPOINT_SEARCH } from "./api/endpoint";
import mock from "./api/mock/mockSetup";
import mockData from "./api/mock/mock.json";

const useMock = true;

const setUpEnvironment = () => {
  if (useMock) {
    mock.setUpMock(ENDPOINT_SEARCH, mockData);
  }
};

export default setUpEnvironment;
