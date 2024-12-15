import { describe, it, expect } from "vitest";
import { isActivePath } from "./isActivePath";

describe("isActivePath", () => {
  it("returns true when current path matches href exactly", () => {
    const result = isActivePath("/about", "/about");
    expect(result).toBe(true);
  });

  it("returns true for root path ('/') when path is '/' or '/index.html'", () => {
    let result = isActivePath("/", "/");
    expect(result).toBe(true);

    result = isActivePath("/", "/index.html");
    expect(result).toBe(true);
  });

  it("returns true when current path includes the href", () => {
    const result = isActivePath("/about/team", "/about");
    expect(result).toBe(true);
  });

  it("returns false when paths don't match", () => {
    const result = isActivePath("/about", "/contact");
    expect(result).toBe(false);
  });
});
