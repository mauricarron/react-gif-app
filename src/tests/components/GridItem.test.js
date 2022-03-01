import { shallow } from "enzyme";
import GridItem from "../../components/GridItem.js";

describe("tests on <GridItem />", () => {
  const title = "My Image";
  const url = "https://localhost/imagen.jpg";

  const wrapper = shallow(<GridItem title={title} url={url} />);

  test("should match component snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should match attributes in <img>", () => {
    const img = wrapper.find("img");

    expect(img.props().src).toBe(url);
    expect(img.props().alt).toBe(title);
  });

  test("should match css animation attributes ", () => {
    const animationAttribute = "animate__fadeIn";
    const li = wrapper.find("li");

    expect(li.prop("className")).toContain(animationAttribute);
  });
});
