import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={Math.random()}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
