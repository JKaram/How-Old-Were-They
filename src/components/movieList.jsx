import React from "react";
import Modal from "react-modal";

import Movie from "./movie";

import './Modal.css'

export default function MovieList({
  list,
  actorBirthday,
  showList,
  toggleModal
}) {
  list = list
    .filter(movie =>
      movie.release_date && movie.poster_path && movie.vote_count > 100
        ? movie
        : null
    )
    .sort((a, b) =>
      a.release_date > b.release_date
        ? 1
        : b.release_date > a.release_date
        ? -1
        : 0
    );

  return (
    <Modal className="" isOpen={showList} ariaHideApp={false}>
      <button onClick={() => toggleModal()}>close</button>
      {list.map(movie => {
        return (
          <Movie
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            actorBirthday={actorBirthday}
          />
        );
      })}
    </Modal>
  );
}
