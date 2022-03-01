import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("tests on <AddCategory />", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should handle the input change", () => {
    const input = wrapper.find("input");
    const value = "Input Changed";

    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("should handle submit", () => {
    wrapper.find("input").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });
});
