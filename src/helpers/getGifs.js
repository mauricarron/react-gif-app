export const getGifs = async (category) => {
  const API_KEY = "OEv5QuVDiGVqLnDTug5jejwxtApomauL";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=${API_KEY}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((i) => {
    return {
      id: i.id,
      title: i.title,
      url: i.images.downsized_medium.url,
    };
  });

  return gifs;
};
