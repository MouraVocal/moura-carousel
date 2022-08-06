import "./styles.css";
import { Carousel } from "./components/Carousel";
import { IMovie } from "./types/movie";

const movies: IMovie[] = [
  {
    id: "1",
    desktop_image_url: "https://picsum.photos/200",
    mobile_image_url: "https://picsum.photos/200",
    title: "Filme 1"
  }
];

export default function App() {
  return (
    <div className="App">
      <Carousel info={movies} />
    </div>
  );
}
