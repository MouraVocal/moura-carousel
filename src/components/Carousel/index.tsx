import { useRef, useState } from 'react'
import Card from './components/Card'
import { CarouselButton } from './components/CarouselButton'
import { CardsContainer, CarouselContainer, Container } from './styles'
import { Dots } from './components/Dots'
import { IMovie } from '../../types/movie'

interface ICarouselProps {
  info: IMovie[]
}

export const Carousel = ({ info }: ICarouselProps) => {
  const CarouselRef = useRef<HTMLDivElement>(null)
  const CardRef = useRef<HTMLDivElement>(null)

  const [activeIndex, setActiveIndex] = useState(1)

  const handleMoveCarousel = (direction: 'left' | 'right') => {
    if (CarouselRef.current && CardRef.current) {
      const { scrollLeft } = CarouselRef.current
      const { clientWidth: cardWidth } = CardRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - cardWidth - 10
          : scrollLeft + cardWidth + 10

      const scrollToIndex = Math.floor(scrollTo / cardWidth + 1)

      setActiveIndex(scrollToIndex < 1 ? 1 : scrollToIndex)

      CarouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const handleScrollTo = (index: number) => {
    if (CarouselRef.current && CardRef.current) {
      const { clientWidth: cardWidth } = CardRef.current

      CarouselRef.current.scrollLeft = (cardWidth + 10) * index
    }
  }

  return (
    <Container>
      <CarouselContainer>
        <CarouselButton
          direction="left"
          size={100}
          onClick={() => handleMoveCarousel('left')}
          isVisible={activeIndex > 1}
        />
        <CarouselButton
          direction="right"
          size={100}
          onClick={() => handleMoveCarousel('right')}
          isVisible={activeIndex < info.length}
        />
        <CardsContainer ref={CarouselRef}>
          {info.map((image, index) => (
            <Card
              url={image.desktop_image_url}
              index={index}
              key={image.id}
              ref={CardRef}
            >
              <h1>Teste</h1>
            </Card>
          ))}
        </CardsContainer>
      </CarouselContainer>

      <Dots
        info={info}
        handleScrollTo={handleScrollTo}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </Container>
  )
}
