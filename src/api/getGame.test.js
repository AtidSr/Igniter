import mock from "./mock/mockSetup";
import data from "./mock/mock.json";

import { getGameApi } from "./getGame";
import { ENDPOINT_SEARCH } from "./endpoint";

describe("Testing axios search", () => {
  beforeAll(() => {
    mock.setUpMock(ENDPOINT_SEARCH, data);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Should get right result", async () => {
    const response = await getGameApi();
    const results = response.data.results;
    expect(results[0].name).toEqual(data.results[0].name);
    expect(results[0].slug).toEqual(data.results[0].slug);
  });
});
