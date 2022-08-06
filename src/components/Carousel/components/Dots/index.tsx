import React from "react";
import { IMovie } from "models/movie";
import { Container, DotButton } from "./styles";

interface IDotsProps {
  info: IMovie[];
  handleScrollTo: (index: number) => void;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const Dots = ({
  info,
  handleScrollTo,
  activeIndex,
  setActiveIndex
}: IDotsProps) => {
  const Dotslength = info.length;

  const handleScroll = (index: number) => {
    setActiveIndex(index + 1);
    handleScrollTo(index);
  };

  return (
    <Container>
      {Array(Dotslength)
        .fill(0)
        .map((_, index) => (
          <DotButton
            active={index + 1 === activeIndex}
            key={index}
            onClick={() => handleScroll(index)}
          />
        ))}
    </Container>
  );
};
