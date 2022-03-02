import { shallow } from "enzyme";
import GifApp from "../GifApp";

describe("tests on <GifApp />", () => {
  const wrapper = shallow(<GifApp />);

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should match components with categories", () => {
    const categories = ["Kimetsu no yaiba", "jujutsu kaisen"];

    const wrapper = shallow(<GifApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
