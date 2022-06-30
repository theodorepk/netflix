const Movie = (props) => {
  console.log(props.image);

  return <img src={props.image} alt="" />;
};

export default Movie;
