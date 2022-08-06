import styled from "styled-components";

interface ICardProps {
  url: string;
}

export const Container = styled.div<ICardProps>`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      270deg,
      rgba(86, 48, 146, 0.0539) -32%,
      rgba(86, 48, 146, 0.77) 116.6%
    ),
    url(${({ url }) => url});
  width: 343px;
  height: 200px;

  @media (max-width: 1023px) {
    :hover {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  }

  @media (min-width: 900px) {
    width: 467px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: 80vw;
    height: 600px;
  }
`;
