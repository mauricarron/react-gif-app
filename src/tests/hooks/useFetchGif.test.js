import { renderHook } from "@testing-library/react-hooks";
import { useFetchGif } from "../../hooks/useFetchGif";

describe("test on useFetchGif", () => {
  test("should return initial value", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("jujutsu kaisen")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("should return initial value", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGif("jujutsu kaisen")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(15);
    expect(loading).toBeFalsy();
  });
});
