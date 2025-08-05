import React from "react";

import styled from "styled-components";

const Card = styled.div`
  width: 340px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Poster = styled.img`
  width: 200px;
  height: 240px;
  align-items: center;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin: 10px 0 4px 0;
`;

const Rating = styled.p`
  font-size: 0.9rem;
  color: #555;
`;
// eslint-disable-next-line no-unused-vars
const MovieCard = ({title, rating, posterPath, id}) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${posterPath}`;
  return (
    <Card>

      <Poster src={imageUrl} alt={`${title} 포스터`} />
      <Title>{title}</Title>
      <Rating>평점: {rating}</Rating>
    </Card>
  );
};

export default MovieCard;
