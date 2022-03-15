import { ENDPOINT_SEARCH } from "./api/endpoint";
import mock, { restore } from "./api/mock/mockSetup";
import mockData from "./api/mock/mock.json";
import mockData2 from "./api/mock/getDetail.json";

// set useMock = false to disable mock
const useMock = true;

// Set up mock value ( test website without calling api)
const setUpEnvironment = () => {
  if (useMock) {
    mock.setUpMock(ENDPOINT_SEARCH, mockData);
    mock.setUpMock(`${ENDPOINT_SEARCH}/test`, mockData2);
    return;
  }
  // Reset mock setup ( disable mock )
  restore();
};

export default setUpEnvironment;
