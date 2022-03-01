import { shallow } from "enzyme";
import GridItem from "../../components/GridItem.js";

describe("tests on <GridItem />", () => {
  const url = "https://localhost/imagen.jpg";

  const wrapper = shallow(<GridItem url={url} />);

  test("should match component snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
