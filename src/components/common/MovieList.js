import React from "react";
import { Modal, Movie } from "./index";
import { CSSTransition } from "react-transition-group";
import "./transition.css";

export function MovieList({ list, actorBirthday, showList, toggleModal }) {
  list = list
    .filter((movie) =>
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
    <>
      <CSSTransition in={showList} timeout={300} className="transition">
        <Modal isOpen={showList} toggleModal={toggleModal} ariaHideApp={false}>
          {list.map((movie) => {
            return (
              <Movie
                key={movie.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                actorBirthday={actorBirthday}
                // Info={asd}
              />
            );
          })}
        </Modal>
      </CSSTransition>
    </>
  );
}
