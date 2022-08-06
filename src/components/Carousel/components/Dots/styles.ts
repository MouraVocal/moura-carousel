import styled from "styled-components";

interface DotButtonProps {
  active: boolean;
}

export const Container = styled.section`
  display: flex;
  width: 100%;
  margin: auto;
  padding: 30px;
  text-align: center;
  justify-content: center;

  @media (min-width: 900px) {
    position: absolute;
    bottom: 0;
  }
`;

export const DotButton = styled.button<DotButtonProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.primaryColor : "#fff"};
  border: none;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 10px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }
`;
