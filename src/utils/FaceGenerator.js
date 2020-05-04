import Leo from "images/leo-face.png";
import Smith from "images/smith-face.png";
import Cage from "images/cage-face.png";

let faces = [Leo, Smith, Cage];

function GenerateFace(faces) {
  return faces[Math.floor(Math.random() * faces.length)];
}
const RandomFace = GenerateFace(faces);
console.log(RandomFace, "Random");

export { RandomFace };
