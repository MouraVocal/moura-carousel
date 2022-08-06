import { ChevronLeft, ChevronRight } from "@styled-icons/material-outlined";
import { Button } from "./styles";

interface ICarouselButtonProps {
  direction: "left" | "right";
  size: number;
  onClick: () => void;
  isVisible?: boolean;
}

export const CarouselButton = ({
  direction,
  size,
  onClick,
  isVisible
}: ICarouselButtonProps) => {
  return (
    <>
      {direction === "left" ? (
        <Button direction="left" onClick={onClick} isVisible={isVisible}>
          <ChevronLeft size={size} />
        </Button>
      ) : (
        <Button direction="right" isVisible={isVisible}>
          <ChevronRight size={size} onClick={onClick} />
        </Button>
      )}
    </>
  );
};
