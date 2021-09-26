import { getRandomPlaceholderText } from "./get-random-placeholder-text";
import placeholderTextOptions from "../../service/placeholder-text-option";

describe("get-random-placeholder-text", () => {
  it("returns random entry from the placeholder text options", () => {
    const randomPlaceholderText = getRandomPlaceholderText();
    expect(
      placeholderTextOptions.indexOf(randomPlaceholderText)
    ).toBeGreaterThanOrEqual(0);
  });
});
