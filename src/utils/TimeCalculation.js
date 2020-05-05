import moment from "moment";

function calculateAge(age, deathDay) {
  if (deathDay) return moment(deathDay).diff(age, "years");
  return moment().diff(age, "years");
}

export { calculateAge };
