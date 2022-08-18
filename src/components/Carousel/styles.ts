import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CardsContainer = styled.section`
  display: flex;
  position: relative;
  overflow-x: scroll;
  gap: 10px;
  align-items: center;
  height: 220px;
  padding: 0 10%;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 900px) {
    height: 330px;
  }

  @media (min-width: 1024px) {
    height: auto;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;

  align-items: center;
`;
