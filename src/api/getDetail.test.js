import mock from "./mock/mockSetup";
import data from "./mock/getDetail.json";
import { ENDPOINT_SEARCH } from "./endpoint";
import { getGameDetailApi } from "./getDetail";

describe("Testing axios get detail", () => {
  beforeAll(() => {
    mock.setUpMock(`${ENDPOINT_SEARCH}/${"test"}`, data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should get right result", async () => {
    const response = await getGameDetailApi("test");
    const results = response.data;
    expect(results).toEqual(data);
  });
});
