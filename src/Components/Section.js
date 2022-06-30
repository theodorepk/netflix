import Movies from "./Movies";
import data from "../assets/movies.json";

const Section = () => {
  return (
    <div>
      {data.map((element, index) => {
        // console.log(element);
        return (
          <Movies
            key={index}
            category={element.category}
            images={element.images}
          />
        );
      })}
    </div>
  );
};

export default Section;
