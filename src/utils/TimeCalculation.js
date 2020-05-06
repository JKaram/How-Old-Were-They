import moment from "moment";

export function calculateAge(age, deathDay) {
  if (deathDay) return moment(deathDay).diff(age, "years");
  return moment().diff(age, "years");
}

export function calculateMovieAgeDiff(actorBirthday, releaseDate) {
  return moment(releaseDate).diff(actorBirthday, "years");
}

export const convertDate = (date) => {
  return moment(date, "YYYY-MM-DD").format("LL");
};

export const getYear = (date) => {
  return moment(date, "YYYY-MM-DD").format("YYYY");
};
