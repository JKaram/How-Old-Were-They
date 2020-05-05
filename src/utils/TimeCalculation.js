import moment from "moment";

function calculateAge(age, deathDay) {
  if (deathDay) return moment(deathDay).diff(age, "years");
  return moment().diff(age, "years");
}

function calculateMovieAgeDiff(actorBirthday, releaseDate) {
  return moment(releaseDate).diff(actorBirthday, "years");
}

export { calculateAge, calculateMovieAgeDiff };
