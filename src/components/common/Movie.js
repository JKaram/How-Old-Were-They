import React, { useState } from "react";
import styled from "styled-components";

import { Info } from "./index";
import { calculateMovieAgeDiff, convertDate, getYear } from "utils/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  border: 2px solid ${(p) => p.theme.header};
  max-width: 200px;
  width: 100%;
  position: relative;
  z-index: 0;

  &:hover {
    border: 2px solid ${(p) => p.theme.comment};
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  background: ${(p) => p.theme.header};
`;

const Img = styled.img`
  margin: auto;
  height: 300px;
  width: 200px;
  z-index: 1;
  /* position: absolute; */
`;

const MoreInfo = styled.div`
  height: 300px;
  width: 200px;
  z-index: 2;
  position: absolute;
  top: 0px;
  color: white;
`;

export function Movie({ title, release_date, poster_path, actorBirthday }) {
  const [toggleInfo, setToggleInfo] = useState(false);
  const releaseDate = convertDate(release_date);
  const releaseYear = getYear(release_date);
  return (
    <Wrapper>
      <ImageWrapper onClick={() => setToggleInfo(!toggleInfo)}>
        <Img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          // loader={<Loading src={loading} height="300px" width="200px" />}
          alt={title}
          height="300px"
          width="200px"
          onClick={() => setToggleInfo(!toggleInfo)}
        />
        {toggleInfo && <MoreInfo>{releaseDate}</MoreInfo>}
      </ImageWrapper>
      <Info
        name={`${title} (${releaseYear})`}
        age={calculateMovieAgeDiff(actorBirthday, release_date)}
      />
    </Wrapper>
  );
}
