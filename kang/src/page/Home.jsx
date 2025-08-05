import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import MovieListData from "../data/movieListData.json";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  background-color: red;
  color: black;
  width: 100%;
`;

const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;
`;

const HeadLine = styled.div`
  background-color: black;
  color: white;
  min-height: 20px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Login = styled.div`
  background-color: blueviolet;
  border-radius: 10px;
  display: flex;
  justify-content: right;
  font-size: 15px;
  padding: 0.3em;
  text-align: center;
  margin-left: 10px;
`;

const Home = () => {
  return (
    <>
      <HeadLine>
        KTSmovied
        <div>
          <Login>로그인</Login>
          <Login>로그아웃</Login>
        </div>
      </HeadLine>
      <Container>
        <Title>
          <h1>영화 목록</h1>
        </Title>
        <MovieWrapper>
          {MovieListData.results.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              rating={movie.rating}
              id={movie.id}
            />
          ))}
        </MovieWrapper>
      </Container>
    </>
  );
};

export default Home;
