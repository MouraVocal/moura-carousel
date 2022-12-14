import styled, { css } from 'styled-components';

interface IButtonProps {
  direction: 'left' | 'right';
  size?: number;
  isVisible?: boolean;
}

export const Button = styled.button<IButtonProps>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  background-color: transparent;
  border: none;
  position: absolute;
  color: #fff;
  ${({ direction }) =>
    direction === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};
  top: ${({ size }) => 50 % -`${size}px`};
  z-index: 5;
`;
