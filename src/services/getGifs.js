const apiKey = "0Kft8ZM16VRjZlUxRFUsFzdAaNRrreIX&q";
//ponemos un valor por defecto {}

export default function getGifs({ keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((image) => {
          const { title, id } = image;
          const { url } = image.images.original;
          return { title, id, url }; //Lo que devuelve la Function
        });
        return gifs;
      }
    });
}
