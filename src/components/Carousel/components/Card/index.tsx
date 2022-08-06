import React, { ForwardRefRenderFunction, forwardRef } from "react";
import { Container } from "./styles";

interface ICardProps {
  children: React.ReactNode;
  url: string;
  index: number;
}

const Card: ForwardRefRenderFunction<HTMLDivElement, ICardProps> = (
  { children, url, index },
  ref
) => {
  return (
    <Container ref={ref} url={url}>
      {index}
      {children}
    </Container>
  );
};

export default forwardRef(Card);
