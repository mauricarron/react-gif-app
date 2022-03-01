import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("tests on <AddCategory />", () => {
  const setCategories = () => {};

  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should handle the input change", () => {
    const input = wrapper.find("input");
    const value = "Input Changed";

    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });
});
