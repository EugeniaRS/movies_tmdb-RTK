import { useGetTypeMovieQuery } from "../../../../ redux/service/movie.service";
import HomePresentacional from "../../HomePresentacional";

const NowplayingHome = ({ filter, page = 1 }) => {
  const { data: results, isLoading } = useGetTypeMovieQuery(filter, page);  

  return isLoading ? (
    <h2>Cargando...</h2>
  ) : (
    results?.results
      .slice(0, 10)
      .map((pelicula) => (
        <HomePresentacional pelicula={pelicula} key={pelicula.id} />
      )) 
  );
};

export default NowplayingHome;
