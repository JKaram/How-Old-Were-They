import axios from "axios";

const API_URL = `https://api.themoviedb.org/3`;

export const getActorInfo = (actorId) =>
  axios
    .get(`${API_URL}/person/${actorId}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIEDB_API_KEY,
        append_to_response: "credits",
      },
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const getActors = async (text) => {
  const res = await axios(
    `${API_URL}/search/person?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&search_type=ngram&language=en-US&query=${text}&page=1&include_adult=false&append_to_response=id`
  );
  const actors = await res.data.results.filter(
    (actor) =>
      actor.known_for_department === "Acting" &&
      actor.popularity > 1 &&
      actor.profile_path
  );

  return actors;
};
