import axiosInstance from "./axiosInstance";

export const getMovieList = async (page = 1) => {
  try {
    const response = await axiosInstance.get("/movie/popular", {
      params: {
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error("TMDB API Error:", error);
    throw error;
  }
};

export const getMovieDetail = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`);

    return response.data;
  } catch (error) {
    console.error("TMDB API Error:", error);
    throw error;
  }
};
