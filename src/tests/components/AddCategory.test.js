import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("tests on <AddCategory />", () => {
  const setCategories = () => {};

  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test("should match Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
