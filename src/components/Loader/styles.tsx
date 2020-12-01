import Styled, { keyframes } from 'styled-components';

const animations = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

interface IProps {
  secondary?: boolean;
}

const Container = Styled.div<IProps>`
  .loader,
  .loader:before,
  .loader:after {
  background: ${({ secondary }) =>
    secondary ? 'var(--purple-primary)' : '#ffffff'};
    animation: ${animations}  1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }

  .loader {
    color: ${({ secondary }) =>
      secondary ? 'var(--purple-primary)' : '#ffffff'};
    text-indent: -9999em;
    margin: 88px auto;
    position: relative;
    font-size: 11px;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }

  .loader:before,
  .loader:after {
    position: absolute;
    top: 0;
    content: '';
  }

  .loader:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }

  .loader:after {
    left: 1.5em;
  }
`;

export default Container;
