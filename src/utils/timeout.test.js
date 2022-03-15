import { timeout } from "./timeout";

describe("test timeout", () => {
  it("Should call function after 100ms", () => {
    jest.useFakeTimers();
    jest.spyOn(global, "setTimeout");

    const mockFn = jest.fn();
    timeout(() => mockFn());

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 100);
  });
});
