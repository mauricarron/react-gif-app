import { getGifs } from "../../helpers/getGifs";

describe("tests on getGifs.js", () => {
  test("should return equal search limit (15)", async () => {
    const gifs = await getGifs("kimetsu no yaiba");

    expect(gifs.length).toBe(15);
  });
});
