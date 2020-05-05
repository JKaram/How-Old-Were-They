import axios from "axios";

const getActorInfo = (actorId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits`
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getActors = async (text, setResults, setLoading, setMessage, results) => {
  if (text === "") return setResults([]);
  setLoading(true);
  setMessage("1 sec");
  const res = await axios(
    `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&search_type=ngram&language=en-US&query=${text}&page=1&include_adult=false&append_to_response=id`
  );
  const movies = await res.data.results.filter(
    (actor) =>
      actor.known_for_department === "Acting" &&
      actor.popularity > 1 &&
      actor.profile_path
  );
  setResults(movies);

  setTimeout(function () {
    setLoading(false);
    results.length
      ? setMessage(
          "Hello! Please search for an actor and find out how old they were when they filmed thier movies."
        )
      : setMessage("Hmm No Results");
  }, 2000);
};

export { getActorInfo, getActors };
