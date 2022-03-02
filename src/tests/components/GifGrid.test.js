import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGif } from "../../hooks/useFetchGif";
jest.mock("../../hooks/useFetchGif");

describe("tests on <GifGrid />", () => {
  const category = "search";

  test("should match snapshot", () => {
    useFetchGif.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should match snapshot with call from useFetchGif", () => {
    const gifs = [
      { id: "ABC", title: "Mi Busqueda", url: "https://direccion.img.jpg" },
      {
        id: "DEF",
        title: "Mi Segunda Busqueda",
        url: "https://direccion.img2.jpg",
      },
    ];
    useFetchGif.mockReturnValue({
      data: gifs,
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });
});
