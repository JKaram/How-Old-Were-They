import React, { useState } from "react";
import Img from "react-image";
import styled from "styled-components";

import { Info } from "./index";
import { calculateMovieAgeDiff } from "utils/index";
import loading from "images/loading-png-gif.gif";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
  max-width: 200px;
  width: 100%;
  position: relative;
  z-index: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Loading = styled.img`
  margin: auto;
  z-index: 1;
  position: absolute;
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
  return (
    <Wrapper>
      <ImageWrapper onClick={() => setToggleInfo(!toggleInfo)}>
        <Img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          loader={<Loading src={loading} height="300px" width="200px" />}
          alt={title}
          height="300px"
          width="200px"
          onClick={() => setToggleInfo(!toggleInfo)}
        />
        {toggleInfo && (
          <MoreInfo>
            {title}
            {release_date}
          </MoreInfo>
        )}
      </ImageWrapper>
      <Info
        name={title}
        age={calculateMovieAgeDiff(actorBirthday, release_date)}
      />
    </Wrapper>
  );
}
