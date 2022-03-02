import { renderHook } from "@testing-library/react-hooks";
import { useFetchGif } from "../../hooks/useFetchGif";

describe("test on useFetchGif", () => {
  test("should return initial value", () => {
    const { result } = renderHook(() => useFetchGif("jujutsu kaisen"));
    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });
});
