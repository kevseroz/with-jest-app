import { handleChange } from "../helper";

describe("Home", () => {
  it("romanian number test", () => {
    expect(handleChange(789)).toBe("DCCLXXXIX");
  });
  it("romanian number test1", () => {
    expect(handleChange(365)).toBe("CCCLXV");
  });
  it("romanian number test2", () => {
    expect(handleChange(902)).toBe("CMII");
  });
});
