import './styles.css'
import { Carousel } from './components/Carousel'
import { IMovie } from './types/movie'

const movies: IMovie[] = [
  {
    id: '1',
    desktop_image_url: 'https://picsum.photos/1000',
    mobile_image_url: 'https://picsum.photos/1000',
    title: 'Filme 1'
  },
  {
    id: '2',
    desktop_image_url: 'https://picsum.photos/1000',
    mobile_image_url: 'https://picsum.photos/1000',
    title: 'Filme 1'
  },
  {
    id: '3',
    desktop_image_url: 'https://picsum.photos/1000',
    mobile_image_url: 'https://picsum.photos/1000',
    title: 'Filme 1'
  },
  {
    id: '4',
    desktop_image_url: 'https://picsum.photos/1000',
    mobile_image_url: 'https://picsum.photos/1000',
    title: 'Filme 1'
  }
]

export default function App() {
  return (
    <div className="App">
      <Carousel info={movies} />
    </div>
  )
}
