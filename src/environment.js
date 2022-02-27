import { ENDPOINT_SEARCH } from "./api/endpoint";
import mock, { restore } from "./api/mock/mockSetup";
import mockData from "./api/mock/mock.json";

export const useMock = true;

const setUpEnvironment = () => {
  if (useMock) {
    mock.setUpMock(ENDPOINT_SEARCH, mockData);
    return;
  }
  restore();
};

export default setUpEnvironment;
