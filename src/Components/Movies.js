import Movie from "./Movie";
import Title from "./Title";

const Movies = (props) => {
  const data2 = props.images;
  //   console.log(data2);
  return (
    <>
      <Title category={props.category} />

      {data2.map((element, index) => {
        return <Movie key={index} image={element} />;
      })}
    </>
  );
};

export default Movies;
