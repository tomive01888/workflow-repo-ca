import { describe, it, expect, beforeEach } from "vitest";
import { getUserName } from "./getUserName";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "Tom" }));

    const userName = getUserName();

    expect(userName).toBe("Tom");
  });

  it("returns null when no user exists in storage", () => {
    const userName = getUserName();

    expect(userName).toBeNull();
  });
});
